'use client';

import { useState } from 'react';
import Calendar from "@/components/ui/calendar"; // Adjust path if needed
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import './schedulePlanner.css'; // Import your CSS file

export default function SchedulePlanner() {
  const [date, setDate] = useState(new Date());
  const [sessions, setSessions] = useState([]);
  const [showTeaching, setShowTeaching] = useState(true);
  const [showLearning, setShowLearning] = useState(true);
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionType, setSessionType] = useState('');

  const addSession = (event) => {
    event.preventDefault();
    if (!sessionTitle || !sessionType) return; // Ensure all fields are filled
    const newSession = {
      id: Date.now(),
      date,
      title: sessionTitle,
      type: sessionType,
    };
    setSessions([...sessions, newSession]);
    setSessionTitle('');
    setSessionType('');
  };

  const filteredSessions = sessions.filter(
    session => (showTeaching && session.type === 'teaching') || (showLearning && session.type === 'learning')
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Schedule Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add New Session</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addSession} className="space-y-4">
              <div>
                <Label htmlFor="title">Session Title</Label>
                <Input 
                  id="title" 
                  value={sessionTitle} 
                  onChange={(e) => setSessionTitle(e.target.value)} 
                  required 
                  className="w-3/4 ml-2" // Smaller width and left margin
                />
              </div>
              <div>
                <Label htmlFor="type">Session Type</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <Input 
                      type="radio" 
                      id="teaching" 
                      name="type" 
                      value="teaching" 
                      checked={sessionType === 'teaching'} 
                      onChange={() => setSessionType('teaching')} 
                    />
                    <Label htmlFor="teaching" className="ml-2">Teaching</Label>
                  </div>
                  <div className="flex items-center">
                    <Input 
                      type="radio" 
                      id="learning" 
                      name="type" 
                      value="learning" 
                      checked={sessionType === 'learning'} 
                      onChange={() => setSessionType('learning')} 
                    />
                    <Label htmlFor="learning" className="ml-2">Learning</Label>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="date">Select Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={date.toISOString().substr(0, 10)} 
                  onChange={(e) => setDate(new Date(e.target.value))} 
                  required 
                />
              </div>
              <Button type="submit" className="bg-dark-gray text-white">Add Session</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="show-teaching"
                checked={showTeaching}
                onCheckedChange={setShowTeaching}
              />
              <Label htmlFor="show-teaching">Teaching</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="show-learning"
                checked={showLearning}
                onCheckedChange={setShowLearning}
              />
              <Label htmlFor="show-learning">Learning</Label>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredSessions.length > 0 ? (
            <ul className="space-y-2">
              {filteredSessions.map(session => (
                <li key={session.id} className="flex justify-between items-center bg-secondary p-2 rounded">
                  <span>{session.title}</span>
                  <span className="flex items-center ml-auto">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${session.type === 'teaching' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                    {session.date.toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming sessions.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
