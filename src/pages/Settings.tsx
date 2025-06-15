
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from "lucide-react";

const Settings = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <div className="sticky top-0 z-50">
        <Header />
        <TabNavigation />
      </div>
      <div className="flex flex-col flex-1 min-h-0">
        <ScrollArea className="flex-1 h-full">
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <SettingsIcon size={32} className="text-primary" />
                <h1 className="text-3xl font-bold">Settings</h1>
              </div>
              
              <div className="grid gap-6 pb-8">
                {/* Account Settings */}
                <div className="bg-card rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold">Account</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Display Name</label>
                      <input 
                        type="text" 
                        className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-card rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bell size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold">Notifications</h2>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Email notifications</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span>Push notifications</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>System updates</span>
                    </label>
                  </div>
                </div>

                {/* Privacy */}
                <div className="bg-card rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold">Privacy</h2>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Allow analytics</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span>Share usage data</span>
                    </label>
                  </div>
                </div>

                {/* Appearance */}
                <div className="bg-card rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold">Appearance</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Theme</label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-md bg-background">
                        <option>System</option>
                        <option>Light</option>
                        <option>Dark</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </ScrollArea>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
