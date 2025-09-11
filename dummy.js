const fs = require("fs")

// حمّل الملف
const data = require("./dummyInfo.json")

function makeDummy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(() => "dummy")
  } else if (typeof obj === "object" && obj !== null) {
    const newObj = {}
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        newObj[key] = makeDummy(obj[key])
      } else {
        newObj[key] = "dummy"
      }
    }
    return newObj
  } else {
    return "dummy"
  }
}

const dummyData = makeDummy(data)

// خزن النتيجة بملف جديد
fs.writeFileSync("dummyInfo.json", JSON.stringify(dummyData, null, 2))
