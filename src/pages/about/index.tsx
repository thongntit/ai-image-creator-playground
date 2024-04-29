/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k38fOcEgMM5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from 'src/components/ui/avatar'

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Our AI Image Generator
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Unleash your creativity with our state-of-the-art AI image generator. Transform your ideas into stunning
                visuals with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">Step 1</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Describe Your Idea</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Simply describe what you want to create, and our AI will generate a unique image for you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">Step 2</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customize and Refine</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Tweak the image to your liking, adjusting details, colors, and composition until it's perfect.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">Step 3</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Download and Share</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Once you're satisfied, download your image in high-quality format and share it with the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Democratizing AI-Powered Image Creation
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to make AI-powered image creation accessible to everyone, empowering individuals and
                businesses to bring their ideas to life with stunning visuals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                Meet the Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Visionaries Behind the AI</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage alt="Thong Nguyen" src="https://www.thongnt.dev/assets/tree.svg" />
                    <AvatarFallback>TN</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold">Thong Nguyen</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
