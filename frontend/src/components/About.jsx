
import React from 'react'

export default function Component() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f0f4ff] to-[#f5f5f5]">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4 justify-center pl-8"> {/* Added padding-left */}
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333]">
                            About Plant Diseases
                        </h2>
                        <p className="text-[#666] md:text-xl lg:text-base xl:text-xl">
                            This website is dedicated to educating users about the common plant diseases that can affect gardens,
                            farms, and natural environments. Our goal is to provide comprehensive information on the causes, symptoms,
                            and treatment of fungal, bacterial, viral, and pest-related plant diseases.
                        </p>
                    </div>
                    <div className="space-y-4 pl-10 justify-end">
                        <h3 className="text-xl font-semibold text-[#333]">Main Types of Plant Diseases</h3>
                        <ul className="grid gap-2 text-[#666]">
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#4CAF50]" />
                                Fungal Diseases
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#4CAF50]" />
                                Bacterial Diseases
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#4CAF50]" />
                                Viral Diseases
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#4CAF50]" />
                                Pest-Related Diseases
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

