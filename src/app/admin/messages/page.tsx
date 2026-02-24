"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const sentMessages = [
  { id: 1, subject: "Payment Reminder", recipients: "127 members", type: "payment", status: "delivered", date: "Feb 23, 2024", openRate: "68%" },
  { id: 2, subject: "TeleRefuah Service Update", recipients: "All members", type: "announcement", status: "delivered", date: "Feb 20, 2024", openRate: "72%" },
  { id: 3, subject: "Your January Statement", recipients: "4,892 members", type: "statement", status: "delivered", date: "Feb 1, 2024", openRate: "81%" },
  { id: 4, subject: "Health Coaching Reminder", recipients: "1,245 members", type: "reminder", status: "delivered", date: "Jan 28, 2024", openRate: "54%" },
  { id: 5, subject: "Welcome to United Refuah!", recipients: "234 members", type: "welcome", status: "delivered", date: "Jan 15, 2024", openRate: "89%" },
];

const templates = [
  { id: "payment_reminder", name: "Payment Reminder", description: "Remind members about overdue payments" },
  { id: "welcome", name: "Welcome Email", description: "Welcome new members to United Refuah" },
  { id: "statement", name: "Monthly Statement", description: "Send monthly sharing statements" },
  { id: "announcement", name: "Announcement", description: "General announcements to members" },
  { id: "custom", name: "Custom Message", description: "Write a custom message" },
];

export default function MessagesPage() {
  const [showCompose, setShowCompose] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [recipientType, setRecipientType] = useState("all");

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Send emails to members</p>
        </div>
        <Button onClick={() => setShowCompose(!showCompose)}>
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Compose Message
        </Button>
      </div>

      {/* Compose Message Panel */}
      {showCompose && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compose New Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Template Selection */}
            <div>
              <Label className="mb-3 block">Select Template</Label>
              <div className="grid grid-cols-5 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border text-left transition-colors ${
                      selectedTemplate === template.id
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-medium text-sm">{template.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{template.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Recipients */}
            <div>
              <Label className="mb-3 block">Recipients</Label>
              <div className="flex gap-3">
                <Button
                  variant={recipientType === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRecipientType("all")}
                >
                  All Members (5,247)
                </Button>
                <Button
                  variant={recipientType === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRecipientType("active")}
                >
                  Active Only (4,892)
                </Button>
                <Button
                  variant={recipientType === "past_due" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRecipientType("past_due")}
                >
                  Past Due (127)
                </Button>
                <Button
                  variant={recipientType === "delinquent" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRecipientType("delinquent")}
                >
                  Delinquent (43)
                </Button>
                <Button
                  variant={recipientType === "specific" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRecipientType("specific")}
                >
                  Specific Members
                </Button>
              </div>
              {recipientType === "specific" && (
                <Input 
                  className="mt-3" 
                  placeholder="Enter member IDs or emails, separated by commas..."
                />
              )}
            </div>

            {/* Subject */}
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter email subject..." className="mt-2" />
            </div>

            {/* Message Body */}
            <div>
              <Label htmlFor="body">Message</Label>
              <Textarea 
                id="body" 
                placeholder="Enter your message..."
                rows={8}
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Available variables: {"{member_name}"}, {"{member_id}"}, {"{plan_type}"}, {"{amount_due}"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send Message
              </Button>
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Preview
              </Button>
              <Button variant="ghost" onClick={() => setShowCompose(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Sent</p>
            <p className="text-2xl font-bold">12,847</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">This Month</p>
            <p className="text-2xl font-bold">1,245</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Avg Open Rate</p>
            <p className="text-2xl font-bold text-green-600">72%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Avg Click Rate</p>
            <p className="text-2xl font-bold">34%</p>
          </CardContent>
        </Card>
      </div>

      {/* Sent Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Sent Messages</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Subject</th>
                <th className="text-left p-4 font-medium text-gray-600">Recipients</th>
                <th className="text-left p-4 font-medium text-gray-600">Type</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Date</th>
                <th className="text-left p-4 font-medium text-gray-600">Open Rate</th>
                <th className="text-right p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {sentMessages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{message.subject}</td>
                  <td className="p-4 text-muted-foreground">{message.recipients}</td>
                  <td className="p-4">
                    <Badge variant="outline">{message.type}</Badge>
                  </td>
                  <td className="p-4">
                    <Badge className="bg-green-100 text-green-800">{message.status}</Badge>
                  </td>
                  <td className="p-4 text-muted-foreground">{message.date}</td>
                  <td className="p-4 font-medium text-green-600">{message.openRate}</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm">Resend</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
