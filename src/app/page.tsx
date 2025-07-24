import Image from 'next/image'
import MarkedText from './component/MarkedText'

export default function Home() {
  return (
    <div
      className='min-h-screen relative overflow-hidden'
      style={{ backgroundColor: 'var(--color-background-light)' }}
    >
      {/* Logo Header */}
      <div className='absolute top-8 left-8 z-20'>
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
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-center px-8'>
        {/* Video Section */}
        <div className='mb-20'>
          <div className='relative'>
            {/* Video with modern styling */}
            <video
              autoPlay
              muted
              loop
              className='rounded-2xl shadow-2xl border'
              style={{
                width: '720px',
                height: 'auto',
                borderColor: 'var(--color-brand-primary)',
                borderWidth: '2px',
              }}
            >
              <source src='/video1.mp4' type='video/mp4' />
            </video>

            {/* Decorative elements */}
            <div
              className='absolute -top-4 -left-4 w-8 h-8 rounded-full opacity-60'
              style={{ backgroundColor: 'var(--color-brand-primary)' }}
            />
            <div
              className='absolute -bottom-4 -right-4 w-6 h-6 rounded-full opacity-40'
              style={{ backgroundColor: 'var(--color-brand-primary)' }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className='text-center max-w-2xl'>
          {/* Main Heading */}
          <h1
            className='text-7xl font-black leading-tight mb-8 tracking-tight'
            style={{
              color: 'black',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            <MarkedText
              type='underline'
              color='var(--color-brand-primary)'
              strokeWidth={3}
              animationDuration={2000}
            >
              Değişim başlıyor
            </MarkedText>
          </h1>

          {/* Subtitle */}
          <div className='relative mb-12'>
            <p
              className='text-3xl font-light tracking-wide'
              style={{
                color: 'var(--color-brand-primary)',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Çok yakında
            </p>
            <div
              className='w-24 h-1 mx-auto mt-6 rounded-full'
              style={{ backgroundColor: 'var(--color-brand-primary)' }}
            />
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
