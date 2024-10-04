import styles from '../styles/Dashboard.module.css';
import Link from 'next/link';
import { Calendar, GraduationCap, Users, Phone, Clock, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
      <header className={styles.header}>
  <h1 className={styles.title}>Each One Teach One </h1>
  <div className={styles.authButtons}>
    <Link href="/login">
    <Button className={`${styles.button1} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>
        Login
      </Button>
    </Link>
    <Link href="/signup">
    <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>
        Sign Up
      </Button>
    </Link>
  </div>
</header>

        <main>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <CardHeader>
                <CardTitle>Senior Communication</CardTitle>
                <CardDescription>Connect with seniors</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>
                  <Link href="/senior-communication" className={styles.buttonContainer}>
                    <MessageSquare className={styles.buttonIcon} />
                    <span>Open Chat</span>
                  </Link>
                </Button>
              </CardContent>
            </div>

            <div className={styles.card}>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>Manage your information</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>

                  <Link href="/profile" className={styles.buttonContainer}>
                    <User className={styles.buttonIcon} />
                    <span className="ml-2">View Profile</span>
                  </Link>
                </Button>
              </CardContent>
            </div>

            <div className={styles.card}>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Your upcoming events</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>

                  <Link href="/calendar" className={styles.buttonContainer}>
                    <Calendar className={styles.buttonIcon} />
                    <span className="ml-2">Open Calendar</span>
                  </Link>
                </Button>
              </CardContent>
            </div>

            <div className={styles.card}>
              <CardHeader>
                <CardTitle>Grade Tracker</CardTitle>
                <CardDescription>Monitor your progress</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>

                  <Link href="/grade-tracker" className={styles.buttonContainer}>
                    <GraduationCap className={styles.buttonIcon} />
                    <span className="ml-2">View Grades</span>
                  </Link>
                </Button>
              </CardContent>
            </div>

            <div className={styles.card}>
              <CardHeader>
                <CardTitle>Social Network</CardTitle>
                <CardDescription>Connect with peers</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>

                  <Link href="/social" className={styles.buttonContainer}>
                    <Users className={styles.buttonIcon} />
                    <span className="ml-2">Explore Network</span>
                  </Link>
                </Button>
              </CardContent>
            </div>

            <div className={styles.card}>
              <CardHeader>
                <CardTitle>Teaching Sessions</CardTitle>
                <CardDescription>Voice and video calls</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>

                  <Link href="/teaching-sessions" className={styles.buttonContainer}>
                    <Phone className={styles.buttonIcon} />
                    <span className="ml-2">Start Session</span>
                  </Link>
                </Button>
              </CardContent>
            </div>

            <div className={styles.card}>
              <CardHeader>
                <CardTitle>Schedule Planner</CardTitle>
                <CardDescription>Organize your time</CardDescription>
              </CardHeader>
              <CardContent>
              <Button className={`${styles.button} w-full transition-all duration-300 rounded-lg shadow-md`} asChild>

                  <Link href="/schedule-planner" className={styles.buttonContainer}>
                    <Clock className={styles.buttonIcon} />
                    <span className="ml-2">Plan Schedule</span>
                  </Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </main>
        
      </div>
      
    </div>
    
    
  );
}
