"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronDown,
  Zap,
  TrendingUp,
  Globe,
  Clock,
  Eye,
  RotateCcw,
  ExternalLink,
  Play,
  X,
  CheckCircle,
  AlertCircle,
  Shield,
  Users,
  Star,
  Award,
  Rocket,
  Lock,
} from "lucide-react"

export default function InsanityHub() {
  const [sessionClicks, setSessionClicks] = useState(0)
  const [showSessionCounter, setShowSessionCounter] = useState(false)
  const [achievement, setAchievement] = useState<string | null>(null)
  const [showWelcomePortal, setShowWelcomePortal] = useState(true)
  const [beamCheck, setBeamCheck] = useState<"pending" | "yes" | "no" | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)

  const incrementClicks = () => {
    const newCount = sessionClicks + 1
    setSessionClicks(newCount)

    if (newCount === 1) {
      setShowSessionCounter(true)
    }

    if (newCount === 1) {
      showAchievement("🎯 First Click!")
    } else if (newCount === 5) {
      showAchievement("🔍 Explorer!")
    } else if (newCount === 10) {
      showAchievement("⚡ Power User!")
    } else if (newCount === 15) {
      showAchievement("🚀 Speed Demon!")
    } else if (newCount === 25) {
      showAchievement("👑 VIP Member!")
    }
  }

  const showAchievement = (text: string) => {
    setAchievement(text)
    setTimeout(() => setAchievement(null), 3000)
  }

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBeamCheck = (answer: "yes" | "no") => {
    setBeamCheck(answer)
    if (answer === "yes") {
      setTimeout(() => {
        setShowWelcomePortal(false)
      }, 2000)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Global Styles */}
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .geometric-bg {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
          position: relative;
        }
        
        .geometric-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%);
          pointer-events: none;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e5e5e5 50%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .insanity-title {
          background: linear-gradient(45deg, #ffffff, #e5e5e5, #ffffff, #cccccc);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: insanity-glow 3s ease-in-out infinite, insanity-pulse 2s ease-in-out infinite alternate;
        }

        @keyframes insanity-glow {
          0%, 100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6));
          }
        }

        @keyframes insanity-pulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.02);
          }
        }
        
        .hover-scale {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-scale:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }
        
        .border-gradient {
          position: relative;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: border-pulse 4s ease-in-out infinite;
        }

        @keyframes border-pulse {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.1);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.3);
          }
        }
        
        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent, rgba(255, 255, 255, 0.1));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }

        .modal-backdrop {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.8);
        }

        .floating-dot {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
          animation: float-dot 8s ease-in-out infinite;
        }

        .floating-dot:nth-child(odd) {
          animation-direction: reverse;
        }

        .floating-dot:nth-child(3n) {
          animation-duration: 12s;
        }

        .floating-dot:nth-child(4n) {
          animation-duration: 6s;
        }

        @keyframes float-dot {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-50px) translateX(30px) scale(1.2);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(-20px) scale(0.8);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-50px) translateX(-40px) scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-120px) translateX(10px) scale(1);
            opacity: 0.1;
          }
        }

        .pulse-dot {
          animation: pulse-glow 3s ease-in-out infinite, move-around 10s linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
          }
        }

        @keyframes move-around {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(50px) translateY(-30px);
          }
          50% {
            transform: translateX(-30px) translateY(-60px);
          }
          75% {
            transform: translateX(-50px) translateY(-30px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        .drift-dot {
          animation: drift-slow 15s linear infinite;
        }

        @keyframes drift-slow {
          0% {
            transform: translateX(-20px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(40px) translateY(-40px) rotate(90deg);
          }
          50% {
            transform: translateX(-10px) translateY(-80px) rotate(180deg);
          }
          75% {
            transform: translateX(-60px) translateY(-40px) rotate(270deg);
          }
          100% {
            transform: translateX(-20px) translateY(0px) rotate(360deg);
          }
        }

        .glow-effect {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
          }
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          animation: card-float 6s ease-in-out infinite;
        }

        @keyframes card-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .feature-card:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }

        .animated-badge {
          animation: badge-bounce 2s ease-in-out infinite;
        }

        @keyframes badge-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animated-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .animated-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .animated-button:hover::before {
          left: 100%;
        }

        .animated-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        .stat-card {
          animation: stat-float 4s ease-in-out infinite;
        }

        .stat-card:nth-child(2n) {
          animation-delay: 1s;
        }

        .stat-card:nth-child(3n) {
          animation-delay: 2s;
        }

        @keyframes stat-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        .progress-bar {
          animation: progress-glow 2s ease-in-out infinite;
        }

        @keyframes progress-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 193, 7, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
          }
        }
      `}</style>

      {/* Animated Dot Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating dots */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`large-${i}`}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Medium dots with pulse */}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={`medium-${i}`}
            className="floating-dot pulse-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05})`,
            }}
          />
        ))}

        {/* Small scattered dots */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute rounded-full drift-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.02})`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className="fixed inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Welcome Portal Modal */}
      {showWelcomePortal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
          <Card className="w-full max-w-md mx-4 bg-black/90 border-white/20 animated-button">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center glow-effect">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">Does your beams say INSANITY?</CardTitle>
              <p className="text-gray-400">Please confirm your setup</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {beamCheck === null && (
                <>
                  <div className="text-center">
                    <p className="text-lg font-medium mb-4">Do your beams say "INSANITY"?</p>
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => handleBeamCheck("yes")}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full animated-button"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Yes
                      </Button>
                      <Button
                        onClick={() => handleBeamCheck("no")}
                        variant="outline"
                        className="border-red-500/50 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-8 py-3 rounded-full animated-button"
                      >
                        <X className="w-4 h-4 mr-2" />
                        No
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {beamCheck === "yes" && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center glow-effect">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400">Verification Successful!</h3>
                  <p className="text-gray-400">Welcome to INSANITY. Redirecting...</p>
                </div>
              )}

              {beamCheck === "no" && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center glow-effect">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Unhook Required</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    You need to unhook your current setup first. Watch this tutorial to learn how:
                  </p>
                  <Button
                    onClick={() => {
                      incrementClicks()
                      window.open("https://streamable.com/06tnbq", "_blank")
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full w-full animated-button"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Unhook Tutorial
                  </Button>
                  <Button
                    onClick={() => setBeamCheck(null)}
                    variant="outline"
                    className="border-white/20 bg-transparent hover:bg-white/5 text-white px-6 py-2 rounded-full w-full animated-button"
                  >
                    Back to Verification
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Session Counter */}
      {showSessionCounter && (
        <div className="fixed top-8 right-8 z-40 border-gradient rounded-2xl p-4 backdrop-blur-xl glow-effect">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Session</span>
          </div>
          <div className="text-2xl font-bold">{sessionClicks}</div>
        </div>
      )}

      {/* Achievement */}
      {achievement && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-full font-medium animate-in slide-in-from-top duration-500 glow-effect">
          {achievement}
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 geometric-bg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="fade-in mb-8">
            <Badge
              variant="outline"
              className="border-white/20 bg-white/5 text-white px-4 py-2 rounded-full animated-badge"
            >
              ⚡ Premium Access • Trusted by 800+ Users
            </Badge>
          </div>

          <div className="fade-in mb-12">
            <h1 className="text-7xl md:text-9xl font-black mb-6 insanity-title tracking-tight">INSANITY</h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              The Ultimate Beam Hub Experience
            </p>
          </div>

          <div className="fade-in mb-16">
            <p className="text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
              Lightning-fast generators, military-grade security, and unmatched reliability. Built by professionals, for
              professionals who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-6 rounded-full font-medium animated-button glow-effect"
                onClick={() => {
                  incrementClicks()
                  window.open("https://discord.gg/genn", "_blank")
                }}
              >
                <Users className="w-4 h-4 mr-2" />
                Join Discord
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent hover:bg-white/5 text-white px-8 py-6 rounded-full font-medium animated-button"
                onClick={() => {
                  incrementClicks()
                  window.open("https://streamable.com/h57bbl", "_blank")
                }}
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Tutorial
              </Button>
            </div>
          </div>

          <button
            onClick={scrollToStats}
            className="fade-in text-gray-600 hover:text-gray-400 transition-colors duration-300 group"
          >
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Why Choose INSANITY?</h2>
            <p className="text-gray-500">Premium features that set us apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-in feature-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center glow-effect">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Military-Grade Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Advanced encryption and security protocols protect your data and ensure complete anonymity.
              </p>
            </div>

            <div className="fade-in feature-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-2xl flex items-center justify-center glow-effect">
                <Rocket className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Optimized servers and cutting-edge technology deliver results in under 1.8 seconds.
              </p>
            </div>

            <div className="fade-in feature-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center glow-effect">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                24/7 dedicated support team ready to assist with any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Performance Metrics</h2>
            <p className="text-gray-500">Real numbers, real results, real trust</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "99.9%", label: "Uptime", color: "text-green-400" },
              { icon: TrendingUp, value: "98.5%", label: "Success Rate", color: "text-blue-400" },
              { icon: Globe, value: "800+", label: "Active Users", special: true, color: "text-yellow-400" },
              { icon: Clock, value: "<1.8s", label: "Response Time", color: "text-purple-400" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`fade-in text-center p-8 border-gradient rounded-3xl hover-scale stat-card ${stat.special ? "ring-2 ring-yellow-500/30" : ""}`}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-6 rounded-2xl flex items-center justify-center glow-effect ${stat.special ? "bg-yellow-500/20" : "bg-white/10"}`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.special ? "text-yellow-400" : "text-white"}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color || "text-white"}`}>{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                {stat.special && (
                  <div className="mt-2">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-2 py-1 text-xs rounded-full animated-badge">
                      Bypasser at 1K!
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bypasser Announcement */}
          <div className="fade-in mt-16 text-center">
            <div className="border-gradient rounded-3xl p-8 max-w-2xl mx-auto glow-effect">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500/20 rounded-2xl flex items-center justify-center glow-effect">
                <Lock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">🔥 Bypasser Coming Soon!</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Once we reach 1,000 active users, we'll release our premium bypasser tool. Help us grow the community
                and unlock this exclusive feature!
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500 progress-bar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">800/1000 users - 80% complete! Only 200 more to go!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Access Hub</h2>
            <p className="text-gray-500">Choose your preferred access method</p>
          </div>

          {/* Main Generator */}
          <div className="fade-in mb-16">
            <div className="border-gradient rounded-3xl p-12 text-center hover-scale glow-effect">
              <div className="w-16 h-16 mx-auto mb-8 bg-white rounded-2xl flex items-center justify-center glow-effect">
                <Zap className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Main Generator</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Primary access with automatic authentication, age verification, and lightning-fast performance. Trusted
                by 800+ users worldwide.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 rounded-full animated-badge">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Live & Operational
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 rounded-full animated-badge">
                  <Star className="w-3 h-3 mr-1" />
                  Premium Quality
                </Badge>
              </div>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-12 py-6 rounded-full font-medium animated-button glow-effect"
                onClick={() => {
                  incrementClicks()
                  window.open("https://logged.tg/auth/insanitybeamer", "_blank")
                }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Launch Generator
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in feature-card rounded-3xl p-8 hover-scale">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center glow-effect">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Link Hider</h4>
                  <p className="text-gray-500 text-sm">Secure proxy system</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Hide your beam URLs through our secure proxy system. Prevents flagging by security filters and maintains
                maximum privacy.
              </p>
              <Button
                variant="outline"
                className="w-full border-white/20 bg-transparent hover:bg-white/5 text-white rounded-full animated-button"
                onClick={() => {
                  incrementClicks()
                  window.open("https://insanityhyperlink.netlify.app/", "_blank")
                }}
              >
                <Eye className="w-4 h-4 mr-2" />
                Access Tool
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </div>

            <div className="fade-in feature-card rounded-3xl p-8 hover-scale">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center glow-effect">
                  <RotateCcw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Cookie Refresher</h4>
                  <p className="text-gray-500 text-sm">Bypass restrictions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Refresh and clear cookies to bypass restrictions and improve success rates. Essential tool for
                maintaining optimal performance.
              </p>
              <Button
                variant="outline"
                className="w-full border-white/20 bg-transparent hover:bg-white/5 text-white rounded-full animated-button"
                onClick={() => {
                  incrementClicks()
                  window.open("https://app.genn.lu/tools/refresher", "_blank")
                }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Access Tool
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in border-gradient rounded-3xl p-12 glow-effect">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center glow-effect">
              <Users className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">Join Our Growing Community</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Connect with 800+ like-minded users, get instant support, and stay updated with the latest features and
              announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-medium animated-button"
                onClick={() => {
                  incrementClicks()
                  window.open("https://discord.gg/genn", "_blank")
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Join Discord Server
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2 text-gradient">INSANITY</h3>
            <p className="text-gray-500 text-sm mb-4">The Ultimate Beam Hub Experience</p>
            <div className="flex justify-center gap-8 text-xs text-gray-600 mb-4">
              <span>Premium Quality</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>Trusted by 800+</span>
            </div>
          </div>
          <div className="text-center text-gray-600 text-xs">
            <p className="mb-2">© 2024 Insanity Beam Hub. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Created by <span className="text-purple-400 font-medium">psykoticx</span>
              <span className="text-purple-400">•</span>
              <span className="text-gray-500">Powered by Innovation</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
