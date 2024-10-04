import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Home, MessageCircle, Search, Users } from "lucide-react";
import Link from "next/link";

export default function SocialComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="text-xl font-bold">Each One Teach One</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <Link href="/messages" className="text-sm font-medium hover:underline">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">Messages</span>
            </Link>
            <Link href="/notifications" className="text-sm font-medium hover:underline">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Link>
            <Avatar size="sm" src="/placeholder-avatar.jpg" alt="User">
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  {[
                    { name: "John Smith", message: "shared a new tutorial", time: "2 hours ago", img: "/placeholder-avatar-2.jpg" },
                    { name: "Emily Brown", message: "is looking for a Python mentor", time: "5 hours ago", img: "/placeholder-avatar-3.jpg" },
                    { name: "Michael Lee", message: "completed the JavaScript course", time: "1 day ago", img: "/placeholder-avatar-4.jpg" },
                  ].map((activity, index) => (
                    <div className="flex items-start space-x-4" key={index}>
                      <Avatar size="md" src={activity.img} alt={activity.name}>
                        <AvatarBadge boxSize="1em" bg="blue.500" />
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{activity.name} {activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Find Peers and Seniors</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="flex space-x-2">
                  <Input placeholder="Search by skill or name" />
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    { name: "Sarah Johnson", title: "Senior Developer | React Expert", img: "/placeholder-avatar-5.jpg" },
                    { name: "David Chen", title: "UX Designer | Figma Pro", img: "/placeholder-avatar-6.jpg" },
                  ].map((peer, index) => (
                    <div className="flex items-center justify-between" key={index}>
                      <div className="flex items-center space-x-4">
                        <Avatar size="md" src={peer.img} alt={peer.name}>
                          <AvatarBadge boxSize="1em" bg="green.500" />
                        </Avatar>
                        <div>
                          <p className="font-medium">{peer.name}</p>
                          <p className="text-sm text-muted-foreground">{peer.title}</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Suggested Connections</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  {[
                    { name: "Lisa Taylor", title: "Data Scientist", img: "/placeholder-avatar-7.jpg" },
                    { name: "Alex Wong", title: "Mobile Developer", img: "/placeholder-avatar-8.jpg" },
                    { name: "Emma Garcia", title: "DevOps Engineer", img: "/placeholder-avatar-9.jpg" },
                  ].map((suggestion, index) => (
                    <div className="flex items-center justify-between" key={index}>
                      <div className="flex items-center space-x-4">
                        <Avatar size="md" src={suggestion.img} alt={suggestion.name}>
                          <AvatarBadge boxSize="1em" bg="blue.500" />
                        </Avatar>
                        <div>
                          <p className="font-medium">{suggestion.name}</p>
                          <p className="text-sm text-muted-foreground">{suggestion.title}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Connect</Button>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular Skills</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "Python", "UI/UX Design", "Data Science", "Machine Learning"].map((skill, index) => (
                    <Button key={index} variant="secondary" size="sm">{skill}</Button>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex items-center justify-between py-4">
          <p className="text-sm text-muted-foreground">© 2023 Each One Teach One. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:underline">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
