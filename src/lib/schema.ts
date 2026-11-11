/** Shared schema.org entities. Only facts that are true: no invented people, credentials, ratings, prices or social profiles. */
export const SITE = 'https://myspafilter.com/';
export const ORG_ID = `${SITE}#organization`;
export const CONTACT_EMAIL = 'contact@myspafilter.com';
/** Profiles that exist. The GitHub repo is the site's public source and data. Do not add a profile that does not exist. */
export const SAME_AS: string[] = [];
export const logo = { '@type': 'ImageObject', url: `${SITE}logo.png`, width: 512, height: 512 };
export const organization = { '@type': 'Organization', '@id': ORG_ID, name: 'MySpaFilter', url: SITE, logo, email: CONTACT_EMAIL, sameAs: SAME_AS,
  description: 'Independent hot tub and spa filter cross-reference: OEM, Unicel, Pleatco and Filbur part numbers matched with sizes and the catalog page for each match.' };
export const publisherRef = { '@type': 'Organization', '@id': ORG_ID, name: 'MySpaFilter', url: SITE, logo };
export const citeAs = (updated: string) => `MySpaFilter. \u201cSpa filter cartridge cross-reference dataset.\u201d MySpaFilter.com, updated ${updated}. ${SITE}data/`;
export const DATASET_KEYWORDS = ['spa filter', 'hot tub filter', 'filter cartridge', 'cross reference', 'OEM part number', 'Unicel', 'Pleatco', 'Filbur', 'cartridge dimensions'];
