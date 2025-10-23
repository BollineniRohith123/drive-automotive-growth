import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus, Bell, Calendar, User } from "lucide-react";

const updateSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().min(1, "Please select a category"),
});

type UpdateFormData = z.infer<typeof updateSchema>;

interface Update {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const UpdatesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: "1",
      title: "New Digital Marketing Services Launched",
      content: "We're excited to announce our comprehensive digital marketing and brand marketing services to help automotive businesses enhance their online presence and reach more customers.",
      author: "Uma Mahesh",
      date: "2024-10-23",
      category: "Services"
    },
    {
      id: "2",
      title: "Automotive Dealership Focus Enhancement",
      content: "Expanding our expertise to better serve automotive dealerships with specialized solutions for sales optimization, customer experience enhancement, and operational efficiency.",
      author: "Uma Mahesh",
      date: "2024-10-20",
      category: "Business"
    }
  ]);

  const form = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "General"
    }
  });

  const onSubmit = (data: UpdateFormData) => {
    const update: Update = {
      id: Date.now().toString(),
      title: data.title,
      content: data.content,
      author: "Uma Mahesh",
      date: new Date().toISOString().split('T')[0],
      category: data.category
    };
    setUpdates([update, ...updates]);
    form.reset();
    setIsOpen(false);
  };

  const categories = ["General", "Services", "Business", "Technology", "Announcements"];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Bell className="h-4 w-4" />
          Updates
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Business Updates & Announcements
          </DialogTitle>
          <DialogDescription>
            Stay updated with the latest news, service enhancements, and important announcements from Uma Consultancy.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Updates List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Updates</h3>
              <Badge variant="secondary">{updates.length} updates</Badge>
            </div>

            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {updates.map((update) => (
                  <Card key={update.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{update.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {update.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {update.date}
                            </span>
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{update.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Post New Update */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Post Update
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      {...form.register("title")}
                      placeholder="Update title..."
                    />
                    {form.formState.errors.title && (
                      <p className="text-sm text-red-500 mt-1">{form.formState.errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      {...form.register("content")}
                      placeholder="Update content..."
                      rows={4}
                    />
                    {form.formState.errors.content && (
                      <p className="text-sm text-red-500 mt-1">{form.formState.errors.content.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      {...form.register("category")}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {form.formState.errors.category && (
                      <p className="text-sm text-red-500 mt-1">{form.formState.errors.category.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="sm" disabled={form.formState.isSubmitting}>
                    Post Update
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Updates:</span>
                  <span className="font-medium">{updates.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Categories:</span>
                  <span className="font-medium">{categories.length}</span>
                </div>
                <Separator className="my-2" />
                <div className="text-xs text-muted-foreground">
                  Updates help keep stakeholders informed about important developments and enhancements.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatesModal;
