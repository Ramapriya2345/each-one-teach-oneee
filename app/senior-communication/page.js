'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar"; // Keep this import
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarComponent as Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, MessageCircleIcon, CalendarIcon, BookOpenIcon } from 'lucide-react';
import './SeniorInteractionPage.css';

export default function SeniorInteractionPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('schedule');

  const seniors = [
    { 
      name: "Alice Johnson", 
      expertise: ["Gardening", "Cooking", "Knitting"], 
      availability: "Weekdays", 
      rating: 4.8,
      reviews: 24
    },
    { 
      name: "Bob Smith", 
      expertise: ["Technology", "Photography", "Woodworking"], 
      availability: "Weekends", 
      rating: 4.9,
      reviews: 31
    },
    { 
      name: "Carol Davis", 
      expertise: ["History", "Literature", "Painting"], 
      availability: "Evenings", 
      rating: 4.7,
      reviews: 19
    },
  ];

  const learningResources = [
    { title: "Gardening 101", type: "Video Course", link: "#" },
    { title: "Introduction to Digital Photography", type: "eBook", link: "#" },
    { title: "World History Timeline", type: "Interactive Guide", link: "#" },
  ];

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="container">
      <section className="text-center mb-12">
        <h1 className="title">Connect with Seniors</h1>
        <p className="subtitle">
          Learn from the wisdom and experience of our senior mentors. Choose a senior to connect with and start your learning journey.
        </p>
      </section>

      <section className="grid mb-12">
        {seniors.map((senior, index) => (
          <Card key={index} className="card">
            <CardHeader className="card-header">
  <div className="avatar-container">
    <Avatar className="avatar mb-8">
      {senior.name.slice(0, 2).toUpperCase()} {/* Display first two letters of the name */}
    </Avatar>
    <CardTitle className="card-title text-center mt-10">{senior.name}</CardTitle> {/* Added text-center class */}
  </div>
  <CardDescription className="card-description">
    {senior.expertise.map((skill, i) => (
      <Badge key={i} variant="secondary" className="badge">{skill}</Badge>
    ))}
  </CardDescription>
</CardHeader>

            <CardContent className="card-content">
              <p className="availability">Available: {senior.availability}</p>
              <div className="rating">
                <StarIcon className="star-icon" />
                <span>{senior.rating} ({senior.reviews} reviews)</span>
              </div>
              <Tabs activeTab={activeTab} className="tabs">
                <TabsList>
                  <TabsTrigger value="schedule" onClick={() => handleTabClick('schedule')}>
                    <CalendarIcon className="icon" />Schedule
                  </TabsTrigger>
                  <TabsTrigger value="message" onClick={() => handleTabClick('message')}>
                    <MessageCircleIcon className="icon" />Message
                  </TabsTrigger>
                  <TabsTrigger value="resources" onClick={() => handleTabClick('resources')}>
                    <BookOpenIcon className="icon" />Resources
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="schedule" activeTab={activeTab}>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="calendar"
                  />
                  <Button className="button">Request Session</Button>
                </TabsContent>
                <TabsContent value="message" activeTab={activeTab}>
                  <Textarea placeholder="Type your message here..." className="textarea" />
                  <Button className="button">Send Message</Button>
                </TabsContent>
                <TabsContent value="resources" activeTab={activeTab}>
                  <ul className="resources-list">
                    {learningResources.map((resource, i) => (
                      <li key={i} className="resource-item">
                        <a href={resource.link} className="resource-link">{resource.title}</a>
                        <span className="resource-type">({resource.type})</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="form-section">
        <h2 className="form-title">Find Your Perfect Mentor</h2>
        <form className="form">
          <Input placeholder="Your Name" className="input" />
          <Input placeholder="Your Email" type="email" className="input" />
          <Input placeholder="Skill You Want to Learn" className="input" />
          <Textarea placeholder="Tell us about your learning goals and preferences" className="textarea" />
          <Button type="submit" className="button">Match Me with a Mentor</Button>
        </form>
      </section>
    </div>
  );
}
