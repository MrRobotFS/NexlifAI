'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const showcaseData = [
  {
    title: "Code Migration + Refactors",
    points: ["Language migrations", "Version upgrades", "Codebase restructuring"],
    color: "from-brand-primary to-brand-secondary",
    chatTitle: "migrate music repo to Python",
    chatContent: [
      { user: "Dev", time: "Aug 15, 2024, 4:35 PM", message: "Migrate the music-generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run." },
      { user: "Devin", time: "Aug 15, 2024, 4:51 PM", message: "Absolutely! I'll start with the 'archmate' directory of the repository. I'll keep you updated on my progress!" }
    ],
    workspaceContent: `@test/lib/music-generation/ $ python3 analyze_results_flat.py
Testing DupFilter:
   DupFilter.__init__
Testing Filter:
   Testing Natural:
      Natural.__init__
   Testing String:
      String.__init__`,
    session: "Session Created"
  },
  {
    title: "Data Engineering + Analysis",
    points: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
    color: "from-brand-accent to-brand-primary",
    chatTitle: "Price Visualization + Analysis",
    chatContent: [
      { user: "Devin", time: "Aug 31, 2024, 7:07 AM", message: "I have completed the requested visualizations." }
    ],
    workspaceContent: `@analytics/16-268-396-5714-$ python3 analyze_results_flat.py
Year  results_price
2019  price_per_sqm
       median        119      mean        139.0
   mean     959.97799  1291.23150  1149.97465 13615.24299 10355.
   25%      1184847     975.28308   94.1.7304  3476.27564  11613.
   50%      47962.96.27   478.25984  1164.53534 11616.`,
    session: "Session Ended"
  },
  {
    title: "Bugs + Backlog Work",
    points: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
    color: "from-brand-secondary to-brand-accent",
    chatTitle: "Invalid auto-triage link",
    chatContent: [
      { user: "Devin", time: "May 30, 2024, 10:53 AM", message: "Got it! I'll look into the exception in `run_main` and the failed auto-triage link format issue." },
      { user: "Devin", time: "May 30, 2024, 10:53 AM", message: "I'll first investigate the `_derive_args` function to understand where the issue might be coming from. I'll also look into the format of the failed auto-triage function and then make a solution." }
    ],
    workspaceContent: `@backend/ee-1384779454dc
$ git checkout dd686
b2f194adec1b99eb7710bc3c41ae7718e93734c

You are in "detached HEAD" state. You can look around, make
experimental changes and commit them, and you can discard any commits you
make in this state without impacting any branches by switching back to
another

If you want to create a new branch to retain commits you make,
you may do so by using -c with the switch command.
Example:`,
    session: "Session Ended"
  }
];

export const ShowcaseSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="showcase" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">Our Work</span>
            <br />
            <span className="text-gray-900 dark:text-white">in Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            See how we've helped businesses transform their operations with AI solutions
          </motion.p>
        </div>

        {/* Accordion Container - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:flex h-[600px] rounded-3xl overflow-hidden bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary gap-1">

          {showcaseData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}
              initial={false}
              animate={{
                flex: hoveredIndex === index ? 2 : 0.5
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >

              {/* Collapsed State - Title */}
              <AnimatePresence>
                {hoveredIndex !== index && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center p-6"
                  >
                    <h3 className="text-white font-bold text-xl lg:text-2xl text-center leading-tight transform -rotate-90 whitespace-nowrap">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded State - Full Content */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute inset-0 p-8 flex"
                  >
                    {/* Background overlay for readability */}
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative z-10 flex w-full gap-8">
                      {/* Left Content */}
                      <div className="flex-1 flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                          {item.title}
                        </h2>
                        <ul className="space-y-3">
                          {item.points.map((point, i) => (
                            <li key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                              <span className="text-white text-lg">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Content - Workspace Simulation */}
                      <div className="flex-1 space-y-4">
                        {/* Chat Window */}
                        <div className="bg-white rounded-lg p-4 h-1/2 shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-sm text-gray-800">{item.chatTitle}</h3>
                            <div className="flex space-x-1">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-2 text-xs max-h-28 overflow-y-auto">
                            {item.chatContent.map((chat, i) => (
                              <div key={i} className="bg-gray-50 rounded p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                  <span className="font-medium text-gray-800">{chat.user}</span>
                                  <span className="text-gray-500">{chat.time}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{chat.message}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                            <span>{item.session}</span>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                              Start a new conversation with Devin
                            </button>
                          </div>
                        </div>

                        {/* Workspace/Terminal Window */}
                        <div className="bg-gray-900 rounded-lg p-4 h-1/2 shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-green-400 text-sm font-mono">Devin's Workspace</span>
                            <div className="flex space-x-2 text-xs text-gray-400">
                              <span>Shell</span>
                              <span>Browser</span>
                              <span>Editor</span>
                              <span className="text-blue-400">Planner</span>
                            </div>
                          </div>
                          <div className="font-mono text-xs text-green-400 whitespace-pre-line leading-relaxed max-h-32 overflow-y-auto">
                            {item.workspaceContent}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Indicators */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
                >
                  {showcaseData.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-1 rounded-full transition-all duration-300 ${
                        idx === index ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Version - Card Grid */}
        <div className="lg:hidden space-y-6">
          {showcaseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white`}
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <ul className="space-y-2 mb-6">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Mobile Chat Simulation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-sm mb-3">{item.chatTitle}</h4>
                <div className="space-y-2 text-xs">
                  {item.chatContent.slice(0, 1).map((chat, i) => (
                    <div key={i} className="bg-white/20 rounded p-2">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                        <span className="font-medium">{chat.user}</span>
                      </div>
                      <p className="leading-relaxed opacity-90">{chat.message.slice(0, 100)}...</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Terminal Simulation */}
              <div className="bg-black/40 rounded-lg p-3">
                <div className="text-green-300 text-xs font-mono">
                  {item.workspaceContent.split('\n').slice(0, 3).join('\n')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
