import AnimatedSection from "@/components/ui/animated-section"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('AboutPage');

  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-mining-white via-white/60 to-mining-gray/10 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-mining-blue/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-mining-blue/10 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <AnimatedSection animation="fadeInLeft">
            {/* Section Title */}
            <div className="flex items-center mb-6 group">
              {/* <div className="w-20 h-1 bg-gradient-to-r from-mining-blue to-mining-blue/50 mr-4 transition-all duration-300 group-hover:scale-x-125 origin-left" /> */}
              <span className="text-mining-blue font-semibold uppercase tracking-widest text-sm">
                {t('title')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-mining-gray to-mining-blue/80 bg-clip-text text-[#222] mb-8">
              {t('heading')}
            </h2>

            <div className="space-y-5 text-lg text-mining-gray/80 leading-relaxed">
              <p>{t('description.paragraph1')}</p>
              <p>{t('description.paragraph2')}</p>
              <p>{t('description.paragraph3')}</p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
                  <div className="flex items-start p-2 rounded-lg hover:bg-mining-blue/5 transition-all group">
                    <CheckCircle className="h-5 w-5 text-mining-blue mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-mining-gray/90 text-sm group-hover:text-mining-blue transition-colors">
                      {t(`features.${index}`)}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-mining-gray/20">
              {[0, 1, 2].map((index) => (
                <div key={index} className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-mining-blue/10 to-mining-blue/5 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative p-4">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-mining-blue to-mining-blue/70 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {t(`stats.${index}.number`)}
                    </div>
                    <div className="text-sm font-medium text-mining-gray/70 group-hover:text-mining-gray">
                      {t(`stats.${index}.label`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Content (Image + Mission & Vision) */}
          <div className="space-y-10">
            <AnimatedSection animation="fadeInRight">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-mining-blue/30 to-mining-blue/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
                <Image
                  width={800}
                  height={400}
                  src= "https://images.pexels.com/photos/10951145/pexels-photo-10951145.jpeg"
                  alt={t('image.alt')}
                  className="relative rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.03] object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Mission & Vision */}
            {/* <div className="grid gap-8">
              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="relative bg-white/70 backdrop-blur-md border border-mining-blue/20 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                  <ParallaxElement speed={0.1} className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full bg-gradient-to-r from-mining-blue/10 via-transparent to-mining-blue/5"></div>
                  </ParallaxElement>
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-mining-blue mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-mining-gray">Our Mission</h3>
                  </div>
                  <p className="text-mining-gray/70">
                    Deliver cutting-edge mining solutions that drive efficiency, sustainability, and industrial growth in alignment with Saudi Vision 2030.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="relative bg-white/60 backdrop-blur-md border border-mining-blue/20 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                  <ParallaxElement speed={0.15} className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full bg-gradient-to-l from-mining-blue/15 to-transparent"></div>
                  </ParallaxElement>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-mining-blue mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-mining-gray">Our Vision</h3>
                  </div>
                  <p className="text-mining-gray/70">
                    To lead the mining sector in technology, sustainability, and local manufacturing.
                  </p>
                </div>
              </AnimatedSection>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
