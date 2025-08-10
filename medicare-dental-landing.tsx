import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Shield, Heart, Users, CheckCircle, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white px-4 lg:px-6 h-16 flex items-center">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">Medicare Dental Plus</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#plans" className="text-sm font-medium hover:text-blue-200 transition-colors">
              Plans
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-blue-200 transition-colors">
              Benefits
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">1-800-MEDICARE</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Medicare Advantage Plans Available
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                    Complete Dental Coverage for Medicare Recipients
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Comprehensive dental plans designed specifically for Medicare beneficiaries. Get the dental care you deserve with affordable premiums and extensive coverage.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    View Plans & Pricing
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Get Free Quote
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>No waiting periods</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Nationwide coverage</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/happy-senior-couple-healthy-teeth.png"
                  width="600"
                  height="400"
                  alt="Happy senior couple with healthy smiles"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dental Plans Section */}
        <section id="plans" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                  Choose Your Dental Plan
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select from our comprehensive dental plans designed to meet your specific needs and budget.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Basic Plan */}
              <Card className="relative border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Basic Dental</CardTitle>
                  <CardDescription>Essential dental care coverage</CardDescription>
                  <div className="text-3xl font-bold text-blue-600">
                    $29<span className="text-base font-normal text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Preventive care (cleanings, exams)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Basic restorative (fillings)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Emergency dental care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>$1,000 annual maximum</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Select Basic Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-colors">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Standard Dental</CardTitle>
                  <CardDescription>Comprehensive dental coverage</CardDescription>
                  <div className="text-3xl font-bold text-blue-600">
                    $49<span className="text-base font-normal text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>All Basic plan benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Major restorative (crowns, bridges)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Root canal therapy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>$2,500 annual maximum</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Select Standard Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Premium Dental</CardTitle>
                  <CardDescription>Complete dental care solution</CardDescription>
                  <div className="text-3xl font-bold text-blue-600">
                    $79<span className="text-base font-normal text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>All Standard plan benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Orthodontics coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Implants and dentures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>$5,000 annual maximum</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Select Premium Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                    Why Choose Our Medicare Dental Plans?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We understand the unique dental needs of Medicare beneficiaries and provide comprehensive coverage with exceptional value.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <Heart className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">No Waiting Periods</h3>
                      <p className="text-gray-600">Get immediate access to preventive care and emergency services from day one.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Nationwide Network</h3>
                      <p className="text-gray-600">Access to over 100,000 dental providers across all 50 states.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Medicare Approved</h3>
                      <p className="text-gray-600">All plans are Medicare-approved and comply with federal regulations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/modern-dental-office.png"
                  width="550"
                  height="400"
                  alt="Modern dental office"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                  What Our Members Say
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from satisfied Medicare Dental Plus members about their experience.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Finally found a dental plan that works with my Medicare. The coverage is excellent and the network of dentists is extensive."
                  </p>
                  <div className="font-semibold text-blue-900">- Margaret S., Age 68</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The customer service is outstanding. They helped me understand my benefits and find a dentist near me."
                  </p>
                  <div className="font-semibold text-blue-900">- Robert T., Age 72</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Affordable premiums and great coverage. I've saved hundreds on my dental care since joining."
                  </p>
                  <div className="font-semibold text-blue-900">- Linda M., Age 65</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div clmedicare-dental-landing>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="max-w-lg flex-1 bg-white text-gray-900" 
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </form>
                <p className="text-xs text-blue-200">
                  Get a free quote in minutes. No obligation required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Call 1-800-MEDICARE
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Find Local Agents
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-bold">Medicare Dental Plus</span>
              </div>
              <p className="text-gray-400 text-sm">
                Providing comprehensive dental coverage for Medicare beneficiaries nationwide.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#plans" className="text-gray-400 hover:text-white">Plans & Pricing</Link></li>
                <li><Link href="#benefits" className="text-gray-400 hover:text-white">Benefits</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Find a Dentist</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Claims</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Member Portal</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-MEDICARE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@medicaredentalplus.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Available Nationwide</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Medicare Dental Plus. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">Accessibility</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
