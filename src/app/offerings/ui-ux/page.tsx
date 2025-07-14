import Image from 'next/image'
import Logo from "@/app/offerings/ui-ux/images/Rectangle 955467.svg"
import Demo from "@/app/offerings/ui-ux/card";

const Page = () => {

    return (
        <div className="relative">
            <div
                className="fixed inset-0 flex justify-center items-center pointer-events-none z-10"
            >
                <Image
                    src={Logo}
                    alt="Hero"
                    width={1.5}
                    height={85}
                    className="object-cover"
                />
            </div>

            <div>
                <div

                    className="snap-y snap-mandatory overflow-y-scroll h-screen w-full mx-auto"
                >
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>مقدمه1</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>مقدمه2</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>3مقدمه</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>مقدمه4</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                </div>
            </div>

            <section className="min-h-screen bg-black p-10 z-20 relative">
                <div className={"flex  flex-wrap gap-5 justify-evenly"}>
                    {Array.from({length: 6}).map((_, index) => (
                        <Demo key={index}/>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default Page
