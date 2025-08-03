import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us & Contact</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Harpick, a Romanian company started around 2022, took off from a passion for collecting unique and
                beautiful picks and a dream of turning imagination into reality. So the two passions merged, and we got
                the first customizing service in Romania. It's a growing dream and a continuous project to scale and add
                new products and reach people nationwide, but also worldwide. The name Harpick is actually a
                two-language combination, as Har means Grace in Romanian, and pick is the English word. We believe this
                company stands by God's grace, and so the name came into being and it stuck. We have been going on this
                road for some time, and we hope you come along with us!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
