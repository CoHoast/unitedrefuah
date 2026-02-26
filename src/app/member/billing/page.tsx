"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const paymentMethod = {
  type: "Visa",
  last4: "4242",
  expiry: "12/26",
};

const payments = [
  { id: 1, date: "Feb 1, 2025", amount: 495, status: "paid", method: "Visa •••• 4242" },
  { id: 2, date: "Jan 1, 2025", amount: 495, status: "paid", method: "Visa •••• 4242" },
  { id: 3, date: "Dec 1, 2024", amount: 495, status: "paid", method: "Visa •••• 4242" },
  { id: 4, date: "Nov 1, 2024", amount: 495, status: "paid", method: "Visa •••• 4242" },
  { id: 5, date: "Oct 1, 2024", amount: 495, status: "paid", method: "Visa •••• 4242" },
  { id: 6, date: "Sep 1, 2024", amount: 495, status: "paid", method: "Visa •••• 4242" },
];

const upcomingPayment = {
  date: "Mar 1, 2025",
  amount: 495,
};

export default function BillingPage() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Billing & Payments</h2>
          <p className="text-muted-foreground">Manage your payment method and view payment history</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Next Payment */}
          <Card className="bg-primary text-white">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-white/80">Next Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">${upcomingPayment.amount}</div>
              <p className="text-white/70">Due {upcomingPayment.date}</p>
              <Button variant="secondary" className="mt-4 w-full">
                Pay Now
              </Button>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• {paymentMethod.last4}</p>
                  <p className="text-sm text-muted-foreground">Expires {paymentMethod.expiry}</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Update Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Auto-Pay Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Auto-Pay</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Enabled</p>
                    <p className="text-sm text-green-700">Charges on the 1st</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Manage Auto-Pay
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Method</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right p-4 font-medium text-muted-foreground">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-muted/30">
                    <td className="p-4 font-medium">{payment.date}</td>
                    <td className="p-4">${payment.amount}</td>
                    <td className="p-4 text-muted-foreground">{payment.method}</td>
                    <td className="p-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Mobile */}
      <div className="lg:hidden p-4 space-y-4">
        <h1 className="text-xl font-bold">Billing & Payments</h1>

        {/* Next Payment Card */}
        <Card className="bg-primary text-white">
          <CardContent className="p-5">
            <p className="text-white/70 text-sm">Next Payment Due</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-3xl font-bold">${upcomingPayment.amount}</span>
              <span className="text-white/70">{upcomingPayment.date}</span>
            </div>
            <Button variant="secondary" className="w-full mt-4">
              Pay Now
            </Button>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div>
                  <p className="font-medium">•••• {paymentMethod.last4}</p>
                  <p className="text-xs text-muted-foreground">Expires {paymentMethod.expiry}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          </CardContent>
        </Card>

        {/* Auto-Pay */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Auto-Pay Enabled</p>
                  <p className="text-xs text-muted-foreground">Charges on the 1st</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <div>
          <h2 className="font-semibold mb-3">Payment History</h2>
          <div className="space-y-2">
            {payments.map((payment) => (
              <Card key={payment.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">${payment.amount}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 mb-1">
                      {payment.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{payment.method}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
