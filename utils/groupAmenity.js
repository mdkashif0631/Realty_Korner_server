import { featuresByCategory } from './amenityMap.js';

export const groupAmenitiesByCategory = (selectedAmenities) => {
  const grouped = [];

  for (const category in featuresByCategory) {
    const features = featuresByCategory[category];

    const matched = features.filter((feature) =>
      selectedAmenities.includes(feature)
    );

    if (matched.length > 0) {
      grouped.push({
        category,
        amenities: matched
      });
    }
  }

  return grouped;
};
