import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <main className = "h-screen flex flex-col gap-2 justify-center items-center">
    <Button>Click me</Button>
    <Button size="sm">Click me</Button>
    <Button variant="ghost">Click me</Button>
    </main>
      
    </>
  )
}