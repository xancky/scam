import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/beach.jpeg";
import gallery2 from "@/assets/Flowers.jpeg";
import gallery3 from "@/assets/traditional.jpeg";
import gallery4 from "@/assets/nightsky.jpeg";

const photos = [
  { src: gallery1, alt: "Sunset together", caption: "Where every sunset reminds me of you" },
  { src: gallery2, alt: "Rose petals", caption: "Beauty in the smallest details" },
  { src: gallery3, alt: "Holding hands", caption: "My favorite place to be" },
  { src: gallery4, alt: "Under the stars", caption: "You and me, beneath the infinite" },
];

const PhotoGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our moments
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            A life I see with  <span className="italic text-primary"><strong>YOU</strong></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-lg shadow-romantic cursor-pointer"
            >
              <div className="aspect-[3/5] md:aspect-[4/5] overflow-hidden">
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="font-letter text-lg italic text-primary-foreground">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
