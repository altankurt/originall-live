import Image from 'next/image'
import MarkedText from './component/MarkedText'

export default function Home() {
  return (
    <div
      className='min-h-screen relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background-light)' }}
    >
      {/* Logo Header */}
      <div className='absolute top-2 left-8 z-20'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={163}
          height={79}
          className='opacity-90'
          priority
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-start pt-28 sm:pt-24 px-8'>
        {/* Video Section */}
        <div className='mb-10'>
          <div className='relative'>
            {/* Video with modern styling */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className='rounded-2xl shadow-2xl border'
              style={{
                width: '720px',
                height: 'auto',
                borderColor: '#F6E96F',
                borderWidth: '2px',
              }}
            >
              <source src='/video1.mp4' type='video/mp4' />
            </video>

          </div>
        </div>

        {/* Text Content */}
        <div className='text-center max-w-2xl'>
          {/* Main Heading */}
          <h1
            className='text-6xl font-semibold leading-tight mb-8 tracking-tight'
            style={{
              color: 'var(--color-brand-primary)',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            <MarkedText
              type='underline'
              color='#F6E96F'
              strokeWidth={4}
              animationDuration={2000}
            >
              Değişim başlıyor
            </MarkedText>
          </h1>

          {/* Subtitle */}
          <div className='relative mb-8'>
            <p
              className='text-3xl font-light tracking-wide'
              style={{
                color: 'var(--color-brand-primary)',
                fontFamily: 'var(--font-plus-jakarta)',
              }}
            >
              Çok yakında
            </p>
          </div>

          {/* Loading Animation */}
          <div className='flex justify-center space-x-2'>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className='w-3 h-3 rounded-full animate-pulse'
                style={{
                  backgroundColor: 'var(--color-brand-primary)',
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
