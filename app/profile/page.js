"use client";

import React from 'react';
import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { BookOpenIcon, UserGroupIcon, ChatIcon } from "@heroicons/react/outline";
import './ProfilePage.css'; // Import the CSS file

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left Column - User Info */}
        <Card className="card">
          <CardHeader className="text-center">
            <Avatar size="xl" name="Jane Doe" src="/placeholder.svg?height=96&width=96" />
            <h2 className="mt-4 text-lg font-bold senior">Jane Doe</h2>
            <p className="text-sm text-gray-500">Passionate Educator | Lifelong Learner</p>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Helping others learn while continuously expanding my own knowledge.
            </p>
            <div className="flex justify-center">
              <Button colorScheme="blue" leftIcon={<ChatIcon className="h-4 w-4" />}>
                Message
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Middle Column - Stats and Skills */}
        <Card className="card">
          <CardHeader>
            <h2 className="text-lg font-bold">Teaching & Learning Stats</h2>
          </CardHeader>
          <CardBody>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center">
                <BookOpenIcon className="mr-2 h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Subjects Taught</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="mr-2 h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Students Helped</p>
                  <p className="text-2xl font-bold">87</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 mt-4">Skills</h3>
              <div className="flex flex-wrap buttons">
                <Button size="sm" colorScheme="gray" >Mathematics</Button>
                <Button size="sm" colorScheme="gray">Physics</Button>
                <Button size="sm" colorScheme="gray">Computer Science</Button>
                <Button size="sm" colorScheme="gray">English Literature</Button>
                <Button size="sm" colorScheme="gray">History</Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Bottom Card - Recent Activity */}
        <Card className="card md:col-span-3">
          <CardHeader>
            <h2 className="text-lg font-bold">Recent Activity</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Completed Python Basics Course</p>
                <Progress value={100} colorScheme="green" />
              </div>
              <div>
                <p className="text-sm font-medium">Teaching JavaScript to 3 students</p>
                <Progress value={65} colorScheme="yellow" />
              </div>
              <div>
                <p className="text-sm font-medium">Learning Machine Learning Fundamentals</p>
                <Progress value={30} colorScheme="blue" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
