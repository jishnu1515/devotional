import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function Home() {
  const mantras = [
    {
      id: "hanuman-chalisa",
      title: "Hanuman Chalisa",
      description: "A devotional hymn dedicated to Lord Hanuman",
      color: "bg-gradient-to-br from-orange-500/90 to-red-500/80 text-white border-orange-600",
    },
    {
      id: "gayatri",
      title: "Gayatri Mantra",
      description: "One of the most important mantras in Hinduism",
      color: "bg-gradient-to-br from-amber-500/90 to-yellow-500/80 text-white border-amber-600",
    },
    {
      id: "mahamrityunjaya",
      title: "Mahamrityunjaya Mantra",
      description: "A life-giving mantra dedicated to Lord Shiva",
      color: "bg-gradient-to-br from-blue-500/90 to-indigo-500/80 text-white border-blue-600",
    },
    {
      id: "purusha-suktam",
      title: "Purusha Suktam",
      description: "Hymn from the Rig Veda about the Cosmic Being",
      color: "bg-gradient-to-br from-green-500/90 to-emerald-500/80 text-white border-green-600",
    },
    {
      id: "sri-suktam",
      title: "Sri Suktam",
      description: "Hymn dedicated to Goddess Lakshmi",
      color: "bg-gradient-to-br from-rose-500/90 to-pink-500/80 text-white border-rose-600",
    },
    {
      id: "medha-suktam",
      title: "Medha Suktam",
      description: "Hymn for gaining knowledge and intelligence",
      color: "bg-gradient-to-br from-purple-500/90 to-violet-500/80 text-white border-purple-600",
    },
    {
      id: "narayana-suktam",
      title: "Narayana Suktam",
      description: "Hymn dedicated to Lord Narayana",
      color: "bg-gradient-to-br from-orange-500/90 to-amber-500/80 text-white border-orange-600",
    },
    {
      id: "rudram-chamakam",
      title: "Rudram Chamakam",
      description: "Powerful hymn dedicated to Lord Rudra (Shiva)",
      color: "bg-gradient-to-br from-red-500/90 to-rose-500/80 text-white border-red-600",
    },
    {
      id: "durga-suktam",
      title: "Durga Suktam",
      description: "Hymn dedicated to Goddess Durga",
      color: "bg-gradient-to-br from-yellow-500/90 to-amber-500/80 text-white border-yellow-600",
    },
    {
      id: "devi-suktam",
      title: "Devi Suktam",
      description: "Hymn glorifying the Divine Mother",
      color: "bg-gradient-to-br from-pink-500/90 to-rose-500/80 text-white border-pink-600",
    },
    {
      id: "vishnu-sahasranamam",
      title: "Vishnu Sahasranamam",
      description: "1000 names of Lord Vishnu",
      color: "bg-gradient-to-br from-emerald-500/90 to-green-500/80 text-white border-emerald-600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Divine Mantras</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of sacred mantras and hymns from Hindu tradition
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mantras.map((mantra) => (
          <Link
            href={`/mantras/${mantra.id}`}
            key={mantra.id}
            className="block transition-transform hover:scale-[1.02]"
          >
            <Card className={`h-full ${mantra.color} border-2 hover:border-primary/50 transition-colors`}>
              <CardHeader>
                <CardTitle className="text-xl">{mantra.title}</CardTitle>
                <CardDescription>{mantra.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Mantra
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
