import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Volume2 } from "lucide-react"
import { mantras } from "@/lib/mantras-data"

interface MantraPageProps {
  params: {
    id: string
  }
}

export default function MantraPage({ params }: MantraPageProps) {
  const mantra = mantras.find((m) => m.id === params.id)

  if (!mantra) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-muted-foreground hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all mantras
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{mantra.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{mantra.description}</p>

        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800/30">
          <CardContent className="p-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {mantra.verses.map((verse, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="font-medium text-lg mb-2">{verse.sanskrit}</div>
                  {verse.transliteration && (
                    <div className="italic mb-2 text-muted-foreground">{verse.transliteration}</div>
                  )}
                  {verse.meaning && <div className="text-muted-foreground">{verse.meaning}</div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            Listen to Recitation
          </Button>
          <Button variant="outline">Download PDF</Button>
        </div>

        {mantra.benefits && (
          <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800/30">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2">
                {mantra.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {mantra.instructions && (
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800/30">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How to Recite</h2>
              <div className="prose dark:prose-invert max-w-none">{mantra.instructions}</div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
