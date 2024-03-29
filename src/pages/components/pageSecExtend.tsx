import Image from "next/image"
import laptop from '../../../public/laptops.jpg'
import FAQ from "./Accordion"


export default function PageSecExtended({ leftSide, rightSide, imageRight, images, useFAQ, FAQHeadings }: { leftSide: any, rightSide: any, imageRight?: boolean, images: any, useFAQ?: boolean, FAQHeadings?: string }) {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {imageRight === false ?
          <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">

            {useFAQ ?
              <div>
                <FAQ headings={FAQHeadings} />
              </div>
              :
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-2 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {leftSide.map((feature: any) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            }
            <Image src={images} alt="" width={650} height={600} />

          </div>
          :

          <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Image src={images} alt="" width={650} height={600} />

            {useFAQ ?
              <div>
                <FAQ headings={FAQHeadings} />
              </div>
              :
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-2 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {leftSide.map((feature: any) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

            }

          </div>

        }
      </div>
    </div>









  )
}
