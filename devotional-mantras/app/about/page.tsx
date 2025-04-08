import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Divine Mantras</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Divine Mantras is dedicated to preserving and sharing the sacred mantras and hymns from Hindu tradition.
              Our mission is to make these powerful spiritual tools accessible to everyone, helping people connect with
              their inner divinity and experience the transformative power of these ancient sounds.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">The Power of Mantras</h2>
            <p className="text-muted-foreground mb-4">
              Mantras are sacred sounds, words, or phrases that have been used for thousands of years in Hindu tradition
              for spiritual transformation, healing, and connection with the divine. When recited with proper
              pronunciation, rhythm, and devotion, mantras can:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Calm the mind and reduce stress</li>
              <li>Enhance concentration and focus</li>
              <li>Purify the environment and energy</li>
              <li>Connect with specific divine energies</li>
              <li>Promote healing and well-being</li>
              <li>Accelerate spiritual growth</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Resource</h2>
            <p className="text-muted-foreground mb-4">
              Our collection includes some of the most powerful and revered mantras from the Hindu tradition. For each
              mantra, we provide:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>The original Sanskrit text</li>
              <li>Transliteration for proper pronunciation</li>
              <li>English translation and meaning</li>
              <li>Benefits of reciting the mantra</li>
              <li>Instructions for practice</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              We encourage you to approach these mantras with respect and devotion. Regular practice with sincere
              intention will yield the best results.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Mantras Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
