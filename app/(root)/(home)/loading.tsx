import { Skeleton } from '@/components/ui/skeleton';


const Loading = () => {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        {/* component from shadcn/ui */}
        <Skeleton className="h-[274px] rounded-lg w-full bg-red-600"  />
      </section>
      <section className='mt-6 flex w-full flex-col sm:mt-20'>
        <Skeleton className="h-10 w-56 bg-red-600" />
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          <Skeleton className="h-[440px] w-full sm:w-[356px]" />
          <Skeleton className="h-[440px] w-full sm:w-[356px]" />
          <Skeleton className="h-[440px] w-full sm:w-[356px]" />
        </div>
      </section>
    </main>
  )
}

export default Loading