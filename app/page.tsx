"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function DataFMWorkshop() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute("href")
      if (href?.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  const [showComingSoon, setShowComingSoon] = useState(false)

  const handleSubmissionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowComingSoon(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs tracking-tight">DataFM</span>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">DataFM 2025</div>
                <div className="text-xs text-slate-600 font-medium">BuildSys Workshop</div>
              </div>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a
                href="#about"
                className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer font-medium text-sm tracking-wide"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                ABOUT
              </a>
              <a
                href="#cfp"
                className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer font-medium text-sm tracking-wide"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("cfp")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                CALL FOR PAPERS
              </a>
              <a
                href="#submission"
                className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer font-medium text-sm tracking-wide"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("submission")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                SUBMISSION
              </a>
              <a
                href="#organization"
                className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer font-medium text-sm tracking-wide"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("organization")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                ORGANIZATION
              </a>
            </div>
            <button className="lg:hidden p-2">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/golden-colorado-landscape.webp)",
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20">
              <svg className="w-4 h-4 text-slate-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-semibold text-slate-700">November 19, 2025</span>
              <span className="mx-3 text-slate-400">•</span>
              <svg className="w-4 h-4 text-slate-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-semibold text-slate-700">Golden, Colorado, USA</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight drop-shadow-lg">
              Eighth International BuildSys Workshop on <span className="text-slate-200">DataFM</span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-light mb-12 text-slate-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Data Acquisition & Analysis with Foundational Models
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#about"
                className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Learn More
              </a>
              <a
                href="#cfp"
                className="border-2 border-white/80 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white/5 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("cfp")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Call for Papers
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/70 text-sm backdrop-blur-sm bg-black/20 inline-block px-4 py-2 rounded-full">
                Photo courtesy of the Colorado Tourism Office
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About the Workshop</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <div className="space-y-8 text-lg leading-relaxed text-slate-700">
                <p>
                  As enthusiasm for and success in the Internet of Things (IoT), Cyber-Physical Systems (CPS), and Smart
                  Buildings continues to grow, so too does the volume and variety of data generated by these systems.
                  This raises important questions: How can we ensure high-quality data collection? And how can we
                  maximize the utility of this data so that multiple projects can benefit from the time, cost, and
                  effort invested in deployments?
                </p>
                <p>
                  With the rise of <strong className="text-slate-900">Foundational Models</strong>—particularly Large
                  Language Models (LLMs)—we now have new tools that can potentially transform how we work with
                  cyber-physical data. Yet, real-world data presents notable challenges, including diverse modalities,
                  limited dataset sizes, and unstructured formats. Recent advances in large AI models, especially those
                  based on transformer architectures, offer promise for improving how data is acquired, analyzed,
                  manipulated, and consumed.
                </p>

                <p>
                  The{" "}
                  <strong className="text-slate-900">
                    DataFM: Data Acquisition & Analysis with Foundational Models
                  </strong>{" "}
                  workshop aims to look broadly at interesting data from interesting sensing systems and/or how such
                  data can be adapted to Foundational Models. The workshop considers problems, solutions, and results
                  from all across the real-world data pipeline. We solicit submissions on unexpected challenges and
                  solutions in the collection of datasets, on new and novel datasets of interest to the community, on
                  experiences and results, explicitly including negative results, in using prior datasets to develop new
                  insights, and on discussions of impact and newfound opportunities with large AI foundational models.
                </p>

                <p>
                  Foundational Models could enhance data quality through sophisticated data cleaning, preprocessing, and
                  augmentation techniques. They can also facilitate the analysis of data streams while identifying
                  anomalies, inconsistencies, and potential biases. Generative AI can also create synthetic datasets
                  that maintain the essential characteristics of real-world data while expanding the available training
                  samples. This may be valuable when real data is challenging due to privacy concerns or logistical
                  constraints. Transformer models can integrate multi-modal data, such as blending textual inputs from
                  sensor logs with quantitative data from measurements. This new flavor of AI-driven analysis can factor
                  in more contextual information, opening new areas of research in enhancing the predictive and
                  diagnostic capabilities of data-driven AI systems deployed in smart environments.
                </p>

                <p>
                  Furthermore, new areas of future work may emerge from exploring the ethical implications of deploying
                  Foundational Models within these domains, ensuring that the benefits of AI are equitably distributed
                  while safeguarding user privacy. The workshop's focus on privacy challenges and solutions becomes
                  increasingly relevant in the era of AI, where the capacity to analyze vast amounts of sensitive data
                  poses significant risks.
                </p>

                <p>
                  The workshop aims to bring together a community of application researchers and algorithm researchers
                  in the sensing systems and building domains to promote breakthroughs from the integration of the
                  generators and users of datasets. The workshop will foster cross-domain understanding by enabling both
                  the understanding of application needs and data collection limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers Section */}
      <section id="cfp" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Call for Papers</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-12">
                <p className="text-lg leading-relaxed text-slate-700 mb-0">
                  The workshop seeks contributions across two major thrusts, but is open to a broad view of interesting
                  questions around the collection, dissemination, and use of data as well as interesting datasets:
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    The collection, evaluation, analysis, and use of data
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Role of cyber-physical or similar data and metadata for informing training and inference of
                      foundational models and applications, such as LLMs
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Insights on generative AI to synthesize data
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Usage of multi-modal data within a single AI model
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Pitfalls on AI models with cyber-physical or similar data and metadata
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Potential applications of large AI models within cyber-physical space
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Challenges and solutions in privacy protection with large AI models
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Cyber-physical data embedding techniques for existing foundational models
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Challenges and solutions in data collection, especially around security and privacy
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Challenges and solutions in hardware/system design of data collection devices
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Expectations and norms for data collection from sensor networks, especially those that involve
                      human factors
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Novel insights from existing datasets
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Metadata management for complex datasets
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Synthetic data, including its generation, application, and utility
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Success stories, key properties of useful datasets and how to generalize these
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Preprocessing, cleaning, and fusing datasets
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Preliminary analysis and visualization of the data
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Shortcomings of prior datasets, and how to address these in the future
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Position papers on policies and norms from experimental design through data management and use are
                      explicitly welcomed
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        />
                      </svg>
                    </div>
                    New and interesting datasets, including but not limited to:
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Smart building, occupancy, motion data, energy, human comfort, vibration, BIM
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Indoor localization, especially unprocessed/unfiltered physical layer measurements
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Shopping-related sensing data
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Animal-related data or sensed data
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Anonymized health, or synthetic health-related data
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Anonymized human-centric interaction and physiological data from applications such as Extended
                      Reality
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Vehicular, GPS, cellular, or wifi traces and remote sensing
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Reproductions of prior work that validate, refute, or enhance results
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-800 mr-3 mt-0.5 font-bold">•</span>
                      Anonymized contact tracing, interaction, and exposure notification data
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 mt-8">
                <p className="text-lg leading-relaxed text-slate-700 mb-0">
                  To enable the longevity of submitted datasets, we plan on providing a central location where a
                  repository for the data, and information about the data can be archived for at least 5 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="submission" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Submission</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <div className="bg-amber-50 rounded-2xl p-8 mb-12 border border-amber-200">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-amber-700 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <p className="text-lg leading-relaxed text-amber-800 mb-0">
                    <strong>Important:</strong> Each accepted submission is required to have at least one author attend
                    the workshop and present to the workshop attendees.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    Full Papers
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Submissions may range from <strong className="text-slate-900">2-5 pages</strong> in PDF format,
                    excluding references, using the standard ACM conference template. Submissions are strongly
                    encouraged to use only as much space as needed to clearly convey the ideas, contributions and the
                    significance of the work.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        />
                      </svg>
                    </div>
                    Dataset Papers
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Dataset submissions should prefix paper titles with{" "}
                    <strong className="text-slate-900">"Dataset:"</strong> and must include a description of the dataset
                    as well as a reasonable accompanying data sample. Once accepted, a fully described dataset must be
                    shared to a public repository by the camera-ready deadline.
                  </p>
                  <p className="text-sm text-slate-600">
                    Issues on licenses will be resolved following procedures similar to CRAWDAD.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Dataset Evaluation Requirements</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Datasets will be reviewed by an artifact evaluation committee. To support this, dataset submissions
                  must include:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Dataset Link</h4>
                    <p className="text-sm text-slate-600">Full dataset access (not just samples)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Example Analysis</h4>
                    <p className="text-sm text-slate-600">Demonstrate potential insights from the data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h1m4 0h1M9 18h6"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Usage Steps</h4>
                    <p className="text-sm text-slate-600">Code samples, videos, or demonstrations</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-slate-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Important Dates
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-900">Paper Submission Due:</span>
                    <span className="text-slate-700">September 22, 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-900">Notification:</span>
                    <span className="text-slate-700">TBD</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-900">Camera Ready:</span>
                    <span className="text-slate-700">October 3, 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-slate-900">Workshop Day:</span>
                    <span className="text-slate-700">November 19, 2025</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mt-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Submission Link</h4>
                  <div className="text-center">
                    <p className="text-slate-700 mb-4">Submit your papers through the conference submission system:</p>
                    <button
                      onClick={handleSubmissionClick}
                      className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Submit Paper
                    </button>
                    <p className="text-sm text-slate-600 mt-4">Submission link will be available soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section id="organization" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Organization</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">
              {/* Co-Chairs & TPC Chairs */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Co-Chairs & TPC Chairs</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      <a
                        href="https://shiwei-fang.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        Shiwei Fang
                      </a>
                    </h4>
                    <p className="text-slate-600">Augusta University</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      <a
                        href="https://yasrachandio.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        Yasra Chandio
                      </a>
                    </h4>
                    <p className="text-slate-600">UMass Amherst</p>
                  </div>
                </div>
              </div>

              {/* Web Chair */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Web Chair</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      <a
                        href="https://www.linkedin.com/in/salverma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        Salil Verma
                      </a>
                    </h4>
                    <p className="text-slate-600">Augusta University</p>
                  </div>
                  <div className="text-center">{/* Empty space for symmetry */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs tracking-tight">DataFM</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">DataFM 2025</h3>
                  <p className="text-sm text-slate-400">BuildSys Workshop</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Eighth International BuildSys Workshop on Data Acquisition & Analysis with Foundational Models
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#about" className="block text-slate-400 hover:text-white transition-colors text-sm">
                    About Workshop
                  </a>
                  <a href="#cfp" className="block text-slate-400 hover:text-white transition-colors text-sm">
                    Call for Papers
                  </a>
                  <a href="#submission" className="block text-slate-400 hover:text-white transition-colors text-sm">
                    Submission
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Information</h4>
                <div className="space-y-2">
                  <a href="#organization" className="block text-slate-400 hover:text-white transition-colors text-sm">
                    Organization
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Important Dates</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <div>Paper Due: Sep 22, 2025</div>
                  <div>Camera Ready: Oct 3, 2025</div>
                  <div>Workshop: Nov 19, 2025</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Location</h4>
                <div className="text-sm text-slate-400">
                  <div>Golden, Colorado, USA</div>
                  <div className="mt-2">Co-located with BuildSys 2025</div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center">
              <p className="text-slate-500 text-sm">
                © 2025 DataFM Workshop. All rights reserved. |
                <span className="ml-2">Eighth International BuildSys Workshop</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon!</h3>
              <p className="text-slate-700 mb-6">
                The submission link will be available soon. Please check back later or contact the organizers for
                updates.
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
