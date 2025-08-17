"use client"

import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const projects = {
  "smartdeen-pro": {
    title: "SmartDeen Pro",
    description: `
      SmartDeen Pro is a comprehensive Islamic lifestyle tablet app built for Android, designed to support daily religious practices through a wide range of features. The app offers prayer times, Quran readings, Hadith collections, and much more.

      I was responsible for implementing core functionality and delivering a smooth, user-friendly interface. I refactored the existing codebase and migrated the UI from XML to Jetpack Compose, resulting in a more dynamic and maintainable design. My work focused on enhancing performance, modernizing the user experience, and ensuring the app remained intuitive and reliable for users.
      
      Key Features I developed include:

      •	Precise prayer time calculations based on user location
      •	An interactive Quran reader with translations support
      •	A user-friendly Hadith reader for easy browsing
      •	Streaming access to Islamic series
      •	An engaging Islamic AI assistant for quick answers
      •	Customizable alarm features to support daily routines
      •	Integrated Live Islamic TV and Radio
      
      The app was built using a clean MVVM architecture, which made the codebase maintainable and scalable. I also implemented offline functionality to ensure users could access critical features even without an internet connection.
    `,
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "XML Views",
      "Kotlin Coroutines",
      "Retrofit",
      "Hilt",
      "Kotlinx Serialization",
      "Room",
      "Data Store",
      "Work Manager",
      "Paging 3",
      "Exoplayer",
      "Gradle Flavors",
      "R8 & ProGuard",
      "Socket IO",
      "Kiosk Mode",
      "Device Owner",
      "MVVM",
      "Multi-Module Architecture",
      "CI/CD",
    ],
    images: [
      "/images/smartdeen/welcome.png",
      "/images/smartdeen/prayer-times.png",
      "/images/smartdeen/quran-chapters.png",
      "/images/smartdeen/quran-reading.png",
      "/images/smartdeen/hadith.png",
      "/images/smartdeen/hadith-chapters.png",
      "/images/smartdeen/islamic-events.png",
      "/images/smartdeen/hijra-event.png",
      "/images/smartdeen/modes.png",
      "/images/smartdeen/login.png",
    ],
    challenges: `
      One of the main challenges of developing SmartDeen Pro was optimizing the app for low-end Android tablets with limited processing power and memory. These budget devices required careful performance tuning to ensure a smooth and responsive user experience.

      To overcome this, I focused on reducing memory consumption, optimizing screen rendering, and limiting background processes. I also implemented efficient data loading strategies and minimized unnecessary computations to maintain performance across all screens.
    `,
    outcomes: `
      SmartDeen Pro successfully launched as a feature-rich Islamic lifestyle. The app was well-received by users for its all-in-one functionality, intuitive design, and performance reliability.

      Through careful optimization and thoughtful implementation, the app maintained stable performance across all supported devices. It helped users stay connected to their daily religious practices and became a go-to resource for prayer times, Quran readings, and live Islamic content. The project also strengthened my experience in building scalable mobile solutions under tight hardware constraints and reinforced my ability to independently manage full-cycle app development.
    `,
  },
  "tayar-tablet": {
    title: "Tayar Tablet",
    description: `
      Tayar Tablet is an Android application designed for clients using solar power systems in regions with unreliable electricity. The app provides a simple yet powerful interface for monitoring solar system performance, battery levels, and overall power health. It empowers users to track energy usage, detect issues early, and make informed decisions to better manage their power supply.
      
      Key Features I developed include:

      •	Real-time monitoring of battery & solar status
      •	Power usage analytics helping optimize consumption
      •	Alerts for critical battery thresholds or system faults
      •	A tablet-optimized interface used in homes and small businesses

      The app was structured using a clean MVVM architecture, which helped maintain separation of concerns and made the codebase easier to scale and test. I also focused on writing reusable components and ensuring smooth data flow between the UI and the connected IoT devices.
    `,
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Kotlin Coroutines",
      "Ktor",
      "Koin",
      "Kotlinx Serialization",
      "Data Store",
      "Socket IO",
      "MVVM",
      "R8 & ProGuard",
      "Baseline Profiles",
      "Firebase Crashlytics",
    ],
    images: [
      "/images/tayar/main-dashboard.png",
      "/images/tayar/power-dashboard-warning.png",
      "/images/tayar/power-dashboard-alt.png",
      "/images/tayar/battery-info.png",
      "/images/tayar/battery-notification.png",
      "/images/tayar/notification-settings.png",
      "/images/tayar/factory-reset.png",
    ],
    challenges: `
      A major challenge in developing Tayar Tablet was integrating with IoT-based solar inverters and ensuring stable, real-time communication using WebSockets. These inverters often came with limited or inconsistent documentation, requiring deep debugging and custom handling to ensure reliable data transmission.

      Working with WebSockets introduced its own set of complexities, especially on low-end tablets with intermittent connectivity. I had to implement robust connection management, error handling, and data parsing to maintain smooth communication and accurate live updates. This experience strengthened my skills in working with real-time systems and hardware-software interaction on Android.
    `,
    outcomes: `
      Tayar Tablet helped clients monitor and manage their solar systems more effectively, increasing transparency and confidence in their energy usage. By giving users access to real-time data, the app enabled better planning around power availability and reduced reliance on guesswork.

      This project expanded my experience with hardware-related mobile development and taught me how to build resilient apps for users in infrastructure-constrained environments—an experience I value greatly.
    `,
  },
  "onmyway-app": {
    title: "OnMyWay App",
    description: `
      On My Way is a cross-border package delivery app that connects senders with transporters traveling between countries. The platform enables individuals or businesses to request deliveries, while travelers can earn by transporting packages on their planned routes. It simplifies international delivery through a user-friendly system that promotes convenience, trust, and efficiency.
      
      Key Features I developed include:
        •	Allowing senders to create delivery requests
        •	Status tracking and delivery push notifications updates
        • ID verification using Scandit SDK
        • Introduced E-payment using Stripe
        •	Chat system between senders and transporters using GetStream SDK

      The app was built using Kotlin with a clean architecture approach, utilizing Coroutines for asynchronous operations and Hilt for dependency injection. I also implemented comprehensive unit tests to ensure reliability of critical components.
    `,
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Kotlin Coroutines",
      "Retrofit",
      "Hilt",
      "Gson",
      "Data Store",
      "Gradle Flavors",
      "Push Notifications",
      "Stripe",
      "Google Maps",
      "MVI",
      "Unit Testing",
      "JUnit",
      "Mockito",
      "CI/CD",
      "GetStream SDK",
      "Scandit ID-Verification SDK",
    ],
    images: ["/images/onmyway/on-my-way.png", "/images/onmyway/image1.png", "/images/onmyway/image2.png", "/images/onmyway/image3.png", "/images/onmyway/image4.png", "/images/onmyway/image5.png", "/images/onmyway/image6.png"],
    challenges: `
      A key challenge was designing a system that could handle complex user interactions across two distinct roles (sender and transporter), while maintaining clarity and ease of use. Working with multi-language and cross-border data also introduced complications in formatting, validation, and region-specific logic.
    `,
    outcomes: `
      On My Way successfully launched as a functional MVP, offering a unique solution for peer-to-peer international deliveries. The app helped bridge the gap between people needing affordable delivery options and travelers looking to earn while on the move.

      Through this project, I gained valuable experience in cross-platform architecture, real-time data handling, and multi-role user experiences—skills I’ve continued to apply in later mobile projects.
    `,
  },
  "moushref": {
    title: "Moushref",
    description: `
      Moushref is an innovative cashless payment and school bus tracking system designed to streamline and secure daily operations for students, parents, and schools. The system uses NFC bracelets for students to make purchases, while parents can monitor and control their children’s spending, set limits, and prevent specific purchases. Parents can also load money onto their children’s wallets, ensuring a secure and controlled spending environment. Additionally, Moushref offers real-time bus tracking, allowing parents to follow their children’s bus route and receive notifications for stops and arrivals.
      
      Key Features I developed include:

      •	Cashless payments using NFC bracelets for secure, quick transactions
      •	Parental controls to monitor and limit purchases, including setting daily spending limits
      •	Ability for parents to block specific items from being purchased
      •	Wallet recharge functionality, enabling parents to top up their children's balance
      •	Real-time school bus tracking, giving parents peace of mind with location updates
      •	Push notifications for parents to alert them of spending or bus status changes
    `,
    technologies: [
      "Dart",
      "BLoC",
      "Cubit",
      "Dio",
      "GoRouter",
      "Freezed",
      "Json Serializable",
      "Injectable",
      "Push Notifications",
      "RxDart",
      "Google Maps",
      "Socket IO",
      "NFC",
      "Shared Preferences",
    ],
    images: [
      "/images/moushref/moushref-1.png",
      "/images/moushref/moushref-2.png",
      "/images/moushref/moushref-3.png",
      "/images/moushref/moushref-4.png",
      "/images/moushref/moushref-5.png",
      "/images/moushref/moushref-6.png",
    ],
    challenges: `
      One of the main challenges was ensuring seamless integration between hardware (NFC bracelets) and the app, as well as ensuring reliable real-time updates for bus tracking. Synchronizing payments, notifications, and bus routes in a timely manner required careful architecture design and constant performance optimization.

      Additionally, ensuring the security and privacy of transaction data and the children's activities was critical. We implemented robust encryption and secured API endpoints to protect sensitive information from unauthorized access.
    `,
    outcomes: `
      Moushref is going to become a convenient solution for schools and parents, enhancing control over students' spending and improving safety with real-time bus tracking. Parents appreciated the transparency of knowing exactly what their children were purchasing and when the bus would arrive. The app helped schools maintain a secure and efficient environment for both students and staff.
    `,
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const projectId = Array.isArray(id) ? id[0] : id
  const project = projects[projectId as keyof typeof projects]

  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">Project not found</h1>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Button variant="outline" asChild className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, i) => (
            <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={project.images[selectedImage] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                fill
                className="object-contain bg-black/5 dark:bg-white/5"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative h-20 w-32 rounded-md overflow-hidden border-2 transition-all ${selectedImage === i ? "border-primary" : "border-transparent"
                    }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
              <div className="text-muted-foreground whitespace-pre-line">{project.description}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Challenges</h2>
            <div className="text-muted-foreground whitespace-pre-line">{project.challenges}</div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Outcomes</h2>
            <div className="text-muted-foreground whitespace-pre-line">{project.outcomes}</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
