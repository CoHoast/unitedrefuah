"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What's my current PreShare amount?",
  "How do I submit a sharing request?",
  "Is dental care eligible for sharing?",
  "When does my membership renew?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Shalom! I'm your United Refuah assistant. I can help you with questions about your membership, sharing guidelines, claims, and more. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (in production, this would call your AI API)
    setTimeout(() => {
      const responses: Record<string, string> = {
        "preshare": `Based on your Family plan, your Annual PreShare Amount is $4,500. You've used $2,847 so far this year, leaving $1,653 remaining.\n\nOnce you meet your PreShare, United Refuah will share 80% of eligible medical expenses, and you'll be responsible for a 20% CoShare up to your annual maximum of $9,000.`,
        "submit": `To submit a sharing request:\n\n1. Tap the + button in the navigation bar\n2. Upload your itemized medical bill\n3. Add any required documents (EOB, receipts)\n4. Review and submit\n\nMost requests are processed within 5-7 business days. You can track the status in the Claims section.`,
        "dental": `Routine dental care (cleanings, x-rays, fillings) is generally not eligible for sharing under the standard guidelines.\n\nHowever, emergency dental procedures resulting from an accident may be eligible. Please contact our team at (440) 772-0700 for specific questions about your situation.`,
        "renew": `Your membership renews automatically on the 1st of each month. Your next payment of $495 will be processed on March 1st.\n\nYou can update your payment method or view your billing history in the Profile section.`,
      };

      let response = "I'd be happy to help with that! For detailed information about your specific situation, please contact our member services team at (440) 772-0700 or email info@unitedrefuahhs.org.";
      
      const lowerText = messageText.toLowerCase();
      if (lowerText.includes("preshare") || lowerText.includes("pre-share") || lowerText.includes("amount")) {
        response = responses.preshare;
      } else if (lowerText.includes("submit") || lowerText.includes("claim") || lowerText.includes("request")) {
        response = responses.submit;
      } else if (lowerText.includes("dental") || lowerText.includes("teeth")) {
        response = responses.dental;
      } else if (lowerText.includes("renew") || lowerText.includes("payment") || lowerText.includes("billing")) {
        response = responses.renew;
      }

      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="p-4 border-b bg-white">
        <h1 className="text-lg font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-500 text-sm">Ask me anything about your membership</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-primary text-white rounded-br-md"
                  : "bg-gray-100 text-gray-900 rounded-bl-md"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.role === "user" ? "text-white/70" : "text-gray-400"
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions (show only at start) */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
            className="flex-1"
          />
          <Button onClick={() => handleSend()} disabled={!input.trim() || isTyping}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
