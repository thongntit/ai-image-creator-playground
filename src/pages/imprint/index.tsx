/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VmUGEwbgzAq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from 'src/components/ui/button'

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Create Your Custom Imprint</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Upload Photo</h2>
            <div className="flex items-center justify-center h-[300px] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Upload a photo and use our tools to create a custom mask. Then submit your design to see the final
              imprint.
            </p>
            <Button className="w-full" variant="outline">
              Upload Photo
            </Button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Draw Mask</h2>
            <div className="flex items-center justify-center h-[300px] bg-gray-200 dark:bg-gray-700 rounded-md" />
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Use our drawing tools to create a custom mask for your photo. You can brush, erase, and add shapes to
              refine your design.
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Brush</Button>
              <Button variant="outline">Eraser</Button>
              <Button variant="outline">Shapes</Button>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Result</h2>
            <div className="flex items-center justify-center h-[300px] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Once you're satisfied with your custom mask, submit your design to see the final imprint.
            </p>
            <Button className="w-full" variant="outline">
              View Result
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
