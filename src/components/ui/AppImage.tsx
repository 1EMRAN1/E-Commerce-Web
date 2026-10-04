import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/cn'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string
}

export function AppImage({ className, wrapperClassName, alt, src, ...props }: AppImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <span className={cn('relative block overflow-hidden bg-slate-100', wrapperClassName)}>
      {failed ? (
        <span className="flex h-full w-full items-center justify-center text-muted" role="img" aria-label={`${alt || 'Image'} unavailable`}><ImageOff aria-hidden="true" /></span>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={cn('h-full w-full object-cover', className)} {...props} />
      )}
    </span>
  )
}
