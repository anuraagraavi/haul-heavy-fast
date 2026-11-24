import LinkbeltRotatorRiggingSm from "@/assets/gallery/linkbelt-rotator-rigging-600.webp";
import LinkbeltRotatorRiggingLg from "@/assets/gallery/linkbelt-rotator-rigging-1600.webp";
import LinkbeltCraneTwinRotatorsSm from "@/assets/gallery/linkbelt-crane-twin-rotators-600.webp";
import LinkbeltCraneTwinRotatorsLg from "@/assets/gallery/linkbelt-crane-twin-rotators-1600.webp";
import RotatorCraneLiftCloseupSm from "@/assets/gallery/rotator-crane-lift-closeup-600.webp";
import RotatorCraneLiftCloseupLg from "@/assets/gallery/rotator-crane-lift-closeup-1600.webp";
import DualRotatorRecoverySm from "@/assets/gallery/dual-rotator-recovery-600.webp";
import DualRotatorRecoveryLg from "@/assets/gallery/dual-rotator-recovery-1600.webp";
import HeavyWreckerContainerSemiSm from "@/assets/gallery/heavy-wrecker-container-semi-600.webp";
import HeavyWreckerContainerSemiLg from "@/assets/gallery/heavy-wrecker-container-semi-1600.webp";
import LinkbeltCraneLowboyLoadSm from "@/assets/gallery/linkbelt-crane-lowboy-load-600.webp";
import LinkbeltCraneLowboyLoadLg from "@/assets/gallery/linkbelt-crane-lowboy-load-1600.webp";
import RotatorCraneTransferSm from "@/assets/gallery/rotator-crane-transfer-600.webp";
import RotatorCraneTransferLg from "@/assets/gallery/rotator-crane-transfer-1600.webp";
import CatExcavatorPeterbiltSm from "@/assets/gallery/cat-excavator-peterbilt-600.webp";
import CatExcavatorPeterbiltLg from "@/assets/gallery/cat-excavator-peterbilt-1600.webp";
import HyundaiExcavatorHaulSm from "@/assets/gallery/hyundai-excavator-haul-600.webp";
import HyundaiExcavatorHaulLg from "@/assets/gallery/hyundai-excavator-haul-1600.webp";
import GeneratorFleetStepdeckSm from "@/assets/gallery/generator-fleet-stepdeck-600.webp";
import GeneratorFleetStepdeckLg from "@/assets/gallery/generator-fleet-stepdeck-1600.webp";
import TrackedEquipmentLowboySm from "@/assets/gallery/tracked-equipment-lowboy-600.webp";
import TrackedEquipmentLowboyLg from "@/assets/gallery/tracked-equipment-lowboy-1600.webp";
import SpecialtyEquipmentLowboySm from "@/assets/gallery/specialty-equipment-lowboy-600.webp";
import SpecialtyEquipmentLowboyLg from "@/assets/gallery/specialty-equipment-lowboy-1600.webp";
import ArticulatedDumpTruckHaulSm from "@/assets/gallery/articulated-dump-truck-haul-600.webp";
import ArticulatedDumpTruckHaulLg from "@/assets/gallery/articulated-dump-truck-haul-1600.webp";
import OversizeDumpTruckRearSm from "@/assets/gallery/oversize-dump-truck-rear-600.webp";
import OversizeDumpTruckRearLg from "@/assets/gallery/oversize-dump-truck-rear-1600.webp";
import DumpTruckLowboyHillsideSm from "@/assets/gallery/dump-truck-lowboy-hillside-600.webp";
import DumpTruckLowboyHillsideLg from "@/assets/gallery/dump-truck-lowboy-hillside-1600.webp";
import DumpTruckPeterbiltHaulSm from "@/assets/gallery/dump-truck-peterbilt-haul-600.webp";
import DumpTruckPeterbiltHaulLg from "@/assets/gallery/dump-truck-peterbilt-haul-1600.webp";
import ArticulatedHaulerTransportSm from "@/assets/gallery/articulated-hauler-transport-600.webp";
import ArticulatedHaulerTransportLg from "@/assets/gallery/articulated-hauler-transport-1600.webp";
import SfpdPatrolCarTowSm from "@/assets/gallery/sfpd-patrol-car-tow-600.webp";
import SfpdPatrolCarTowLg from "@/assets/gallery/sfpd-patrol-car-tow-1600.webp";
import HhRollbackFlatbedSm from "@/assets/gallery/hh-rollback-flatbed-600.webp";
import HhRollbackFlatbedLg from "@/assets/gallery/hh-rollback-flatbed-1600.webp";
import HummerEvFlatbedSm from "@/assets/gallery/hummer-ev-flatbed-600.webp";
import HummerEvFlatbedLg from "@/assets/gallery/hummer-ev-flatbed-1600.webp";

export type GalleryCategory = "haul" | "recovery" | "municipal" | "flatbed";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  caption: string;
  alt: string;
  sm: string;
  lg: string;
  w: number;
  h: number;
  /** CSS object-position used when cropping into the uniform grid tile. */
  focus?: string;
}

export const GALLERY_CATEGORIES: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "haul", label: "Heavy Haul" },
  { id: "recovery", label: "Recovery & Rotator" },
  { id: "municipal", label: "Municipal" },
  { id: "flatbed", label: "Flatbed" },
];

/** Real H&H job-site photos (optimized WebP: 600px grid, 1600px viewer). */
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "linkbelt-rotator-rigging", category: "recovery", caption: "Rotator rigging a Link-Belt crane onto a lowboy", alt: "Rotator rigging a Link-Belt crane onto a lowboy - H&H Towing Bay Area", sm: LinkbeltRotatorRiggingSm, lg: LinkbeltRotatorRiggingLg, w: 600, h: 450 },
  { id: "linkbelt-crane-twin-rotators", category: "recovery", caption: "Twin rotators lifting a Link-Belt crane", alt: "Twin rotators lifting a Link-Belt crane - H&H Towing Bay Area", sm: LinkbeltCraneTwinRotatorsSm, lg: LinkbeltCraneTwinRotatorsLg, w: 600, h: 800 },
  { id: "rotator-crane-lift-closeup", category: "recovery", caption: "Precision crane lift with our heavy rotator", alt: "Precision crane lift with our heavy rotator - H&H Towing Bay Area", sm: RotatorCraneLiftCloseupSm, lg: RotatorCraneLiftCloseupLg, w: 600, h: 800 },
  { id: "dual-rotator-recovery", category: "recovery", caption: "Dual rotator setup on a large-scale recovery", alt: "Dual rotator setup on a large-scale recovery - H&H Towing Bay Area", sm: DualRotatorRecoverySm, lg: DualRotatorRecoveryLg, w: 600, h: 800 },
  { id: "heavy-wrecker-container-semi", category: "recovery", caption: "Heavy wrecker towing a loaded container semi", alt: "Heavy wrecker towing a loaded container semi - H&H Towing Bay Area", sm: HeavyWreckerContainerSemiSm, lg: HeavyWreckerContainerSemiLg, w: 600, h: 450 },
  { id: "linkbelt-crane-lowboy-load", category: "recovery", caption: "Link-Belt crane secured for transport", alt: "Link-Belt crane secured for transport - H&H Towing Bay Area", sm: LinkbeltCraneLowboyLoadSm, lg: LinkbeltCraneLowboyLoadLg, w: 600, h: 800 },
  { id: "rotator-crane-transfer", category: "recovery", caption: "Crane transfer with rotator boom support", alt: "Crane transfer with rotator boom support - H&H Towing Bay Area", sm: RotatorCraneTransferSm, lg: RotatorCraneTransferLg, w: 600, h: 800 },
  { id: "cat-excavator-peterbilt", category: "haul", caption: "CAT excavator on a Peterbilt lowboy", alt: "CAT excavator on a Peterbilt lowboy - H&H Towing Bay Area", sm: CatExcavatorPeterbiltSm, lg: CatExcavatorPeterbiltLg, w: 600, h: 450 },
  { id: "hyundai-excavator-haul", category: "haul", caption: "Hyundai excavator heavy haul", alt: "Hyundai excavator heavy haul - H&H Towing Bay Area", sm: HyundaiExcavatorHaulSm, lg: HyundaiExcavatorHaulLg, w: 600, h: 338 },
  { id: "generator-fleet-stepdeck", category: "haul", caption: "Fleet of generators on a stepdeck trailer", alt: "Fleet of generators on a stepdeck trailer - H&H Towing Bay Area", sm: GeneratorFleetStepdeckSm, lg: GeneratorFleetStepdeckLg, w: 600, h: 450 },
  { id: "tracked-equipment-lowboy", category: "haul", caption: "Tracked equipment loaded on a lowboy", alt: "Tracked equipment loaded on a lowboy - H&H Towing Bay Area", sm: TrackedEquipmentLowboySm, lg: TrackedEquipmentLowboyLg, w: 600, h: 450 },
  { id: "specialty-equipment-lowboy", category: "haul", caption: "Specialty equipment haul", alt: "Specialty equipment haul - H&H Towing Bay Area", sm: SpecialtyEquipmentLowboySm, lg: SpecialtyEquipmentLowboyLg, w: 600, h: 450 },
  { id: "articulated-dump-truck-haul", category: "haul", caption: "Articulated dump truck transport", alt: "Articulated dump truck transport - H&H Towing Bay Area", sm: ArticulatedDumpTruckHaulSm, lg: ArticulatedDumpTruckHaulLg, w: 600, h: 800 },
  { id: "oversize-dump-truck-rear", category: "haul", caption: "Oversize load: dump truck on the trailer", alt: "Oversize load: dump truck on the trailer - H&H Towing Bay Area", sm: OversizeDumpTruckRearSm, lg: OversizeDumpTruckRearLg, w: 600, h: 800 },
  { id: "dump-truck-lowboy-hillside", category: "haul", caption: "Dump truck hauled from a hillside job site", alt: "Dump truck hauled from a hillside job site - H&H Towing Bay Area", sm: DumpTruckLowboyHillsideSm, lg: DumpTruckLowboyHillsideLg, w: 600, h: 800 },
  { id: "dump-truck-peterbilt-haul", category: "haul", caption: "Peterbilt hauling an articulated dump truck", alt: "Peterbilt hauling an articulated dump truck - H&H Towing Bay Area", sm: DumpTruckPeterbiltHaulSm, lg: DumpTruckPeterbiltHaulLg, w: 600, h: 800 },
  { id: "articulated-hauler-transport", category: "haul", caption: "Articulated hauler transport", alt: "Articulated hauler transport - H&H Towing Bay Area", sm: ArticulatedHaulerTransportSm, lg: ArticulatedHaulerTransportLg, w: 600, h: 800 },
  { id: "sfpd-patrol-car-tow", category: "municipal", caption: "H&H wrecker towing an SFPD patrol car", alt: "H&H wrecker towing an SFPD patrol car - H&H Towing Bay Area", sm: SfpdPatrolCarTowSm, lg: SfpdPatrolCarTowLg, w: 600, h: 450 },
  { id: "hh-rollback-flatbed", category: "flatbed", caption: "H&H rollback flatbed ready for dispatch", alt: "H&H rollback flatbed ready for dispatch - H&H Towing Bay Area", sm: HhRollbackFlatbedSm, lg: HhRollbackFlatbedLg, w: 600, h: 450 },
  { id: "hummer-ev-flatbed", category: "flatbed", caption: "GMC Hummer EV strapped on our flatbed", alt: "GMC Hummer EV strapped on our flatbed - H&H Towing Bay Area", sm: HummerEvFlatbedSm, lg: HummerEvFlatbedLg, w: 600, h: 338 },
];

/** Paths where the global gallery is hidden. */
export const isGalleryExcluded = (path: string) =>
  /^\/(blog|get-a-quote|contact|thank-you|privacy-policy|terms|sitemap|dg-seo-report)(\/|$)/.test(path);
