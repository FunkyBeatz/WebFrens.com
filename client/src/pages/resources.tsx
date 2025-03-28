import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResourceListSkeleton } from "@/components/skeletons/resource-skeleton";

const roleTypes = [
  "Moderator",
  "Collab Managers",
  "Community Manager",
  "Advisors",
  "Front-end dev",
  "Back-end dev",
  "Full stack Dev",
  "Managers",
] as const;

const experienceYears = [
  "0-1 years",
  "1-2 years",
  "2-3 years",
  "3-5 years",
  "5+ years"
] as const;

const skillLevels = [
  "Entry Level",
  "Junior",
  "Mid-Level",
  "Senior",
  "Lead",
  "Expert"
] as const;

type RoleType = typeof roleTypes[number];
type ExperienceYear = typeof experienceYears[number];
type SkillLevel = typeof skillLevels[number];

type Resource = {
  id: number;
  title: string;
  description: string;
  roleType: RoleType;
  experience?: ExperienceYear;
  skillLevel: SkillLevel;
  skills: { name: string }[];
  certifications: { name: string }[];
};

type Skill = {
  id: number;
  name: string;
};

type Certification = {
  id: number;
  name: string;
};

export default function Resources() {
  const [selectedRole, setSelectedRole] = useState<RoleType | "all">("all");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceYear | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | "all">("all");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  const { data: skills = [], isLoading: skillsLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const { data: certifications = [], isLoading: certificationsLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const { data: resources = [], isLoading: resourcesLoading, error } = useQuery<Resource[]>({
    queryKey: ["/api/resources", {
      roleType: selectedRole === "all" ? undefined : selectedRole,
      experience: selectedExperience === "all" ? undefined : selectedExperience,
      skillLevel: selectedLevel === "all" ? undefined : selectedLevel,
      skills: selectedSkills.length > 0 ? selectedSkills : undefined,
      certifications: selectedCertifications.length > 0 ? selectedCertifications : undefined,
      search: searchQuery || undefined,
    }],
  });

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg"></div>
      </div>

      <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Resources</h1>
          <p className="text-muted-foreground text-lg">
            Find the perfect role for your skills and experience
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-background/60 backdrop-blur-lg rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  {skillsLoading ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Input
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  )}
                </div>
                {skillsLoading ? (
                  <Skeleton className="h-10 w-[200px]" />
                ) : (
                  <Select value={selectedRole} onValueChange={(value) => setSelectedRole(value as RoleType | "all")}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue placeholder="Role Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      {roleTypes.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {skillsLoading ? (
                  <>
                    <Skeleton className="h-10 w-[200px]" />
                    <Skeleton className="h-10 w-[200px]" />
                  </>
                ) : (
                  <>
                    <Select value={selectedExperience} onValueChange={(value) => setSelectedExperience(value as ExperienceYear | "all")}>
                      <SelectTrigger className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Experience Required" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Experience</SelectItem>
                        {experienceYears.map((exp) => (
                          <SelectItem key={exp} value={exp}>
                            {exp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedLevel} onValueChange={(value) => setSelectedLevel(value as SkillLevel | "all")}>
                      <SelectTrigger className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Experience Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        {skillLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {skillsLoading || certificationsLoading ? (
                  <>
                    <Skeleton className="h-10 w-[200px]" />
                    <Skeleton className="h-10 w-[200px]" />
                  </>
                ) : (
                  <>
                    <Popover open={skillsOpen} onOpenChange={setSkillsOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={skillsOpen}
                          className="w-full sm:w-[200px] justify-between"
                        >
                          {selectedSkills.length === 0
                            ? "Select skills"
                            : `${selectedSkills.length} selected`}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full sm:w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search skills..." />
                          <CommandEmpty>No skill found.</CommandEmpty>
                          <CommandGroup>
                            {skills.map((skill) => (
                              <CommandItem
                                key={skill.id}
                                value={skill.name}
                                onSelect={(value) => {
                                  setSelectedSkills(
                                    selectedSkills.includes(value)
                                      ? selectedSkills.filter((s) => s !== value)
                                      : [...selectedSkills, value]
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedSkills.includes(skill.name) ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {skill.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <Popover open={certificationsOpen} onOpenChange={setCertificationsOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={certificationsOpen}
                          className="w-full sm:w-[200px] justify-between"
                        >
                          {selectedCertifications.length === 0
                            ? "Select certifications"
                            : `${selectedCertifications.length} selected`}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full sm:w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search certifications..." />
                          <CommandEmpty>No certification found.</CommandEmpty>
                          <CommandGroup>
                            {certifications.map((cert) => (
                              <CommandItem
                                key={cert.id}
                                value={cert.name}
                                onSelect={(value) => {
                                  setSelectedCertifications(
                                    selectedCertifications.includes(value)
                                      ? selectedCertifications.filter((c) => c !== value)
                                      : [...selectedCertifications, value]
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCertifications.includes(cert.name) ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {cert.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </>
                )}
              </div>
            </div>
          </div>
          {resourcesLoading ? (
            <ResourceListSkeleton />
          ) : error ? (
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Error</CardTitle>
                <CardDescription>
                  Failed to load resources. Please try again later.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="grid gap-6">
              {resources.map((resource) => (
                <Card
                  key={resource.id}
                  className="bg-background/60 backdrop-blur-lg border-none shadow-lg hover:bg-background/70 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                        <CardDescription className="text-base">
                          {resource.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {resource.roleType}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {resource.experience && (
                            <Badge variant="outline" className="bg-primary/5">
                              {resource.experience}
                            </Badge>
                          )}
                          {resource.certifications?.map((cert, index) => (
                            <Badge key={index} variant="outline" className="bg-primary/5">
                              {cert.name}
                            </Badge>
                          ))}
                          {resource.skills?.map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">
                          {resource.skillLevel}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}