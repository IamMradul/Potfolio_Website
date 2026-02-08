import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Users, Code2, Mic, Heart, Camera, Palette } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "GDG Core Team Member",
    description: "Active member of Google Developer Groups, organizing tech events and workshops",
    color: "#4285F4",
  },
  {
    icon: Code2,
    title: "Coding Club Member",
    description: "Participating in coding challenges and collaborative programming sessions",
    color: "#10B981",
  },
  {
    icon: Mic,
    title: "Conference Presenter",
    description: "Presented research at international academic conferences",
    color: "#8B5CF6",
  },
  {
    icon: Heart,
    title: "Volunteer Work",
    description: "Contributing to community service and educational initiatives",
    color: "#EF4444",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring creative visual storytelling",
    color: "#F59E0B",
  },
  {
    icon: Palette,
    title: "Sketching",
    description: "Expressing creativity through traditional and digital art",
    color: "#EC4899",
  },
];

const Extracurriculars = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="extracurriculars" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Extracurriculars & Interests</h2>
          <p className="section-subtitle">
            Beyond coding: community involvement and creative pursuits
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <CardSpotlight
                color={activity.color}
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${activity.color}20` }}
                  >
                    <activity.icon
                      className="h-6 w-6"
                      style={{ color: activity.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
