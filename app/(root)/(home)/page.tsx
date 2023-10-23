import Filters from "@/components/Filters"
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard"
import SearchForm from "@/components/SearchForm"
import { getResources } from "@/sanity/actions"

// 900sec to update serverside every  15min sanity
export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ( {searchParams}: Props ) => {
  
  const resources = await getResources({
    query: '',
    category: searchParams?.category || '',
    page: '1'
  })

  console.log(resources);
  

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className=" sm:heading1 heading2 mb-6 text-center text-white"><span className="text-gradient_yellow-green">JavaScript</span> Mastery Resourses</h1>
        </div>
        <SearchForm />
      </section>

      <Filters />

      <section className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
        <Header />
        {resources?.length > 0 ? (
          resources.map((resource: any) => (
            <ResourceCard 
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downLoadNumber={resource.views}
            />
          ))
        ) : (
          <p className="body-regular text-white-400">
            No resources found
          </p>
        )}
      </section>
    </main>
  )
}

export default Page