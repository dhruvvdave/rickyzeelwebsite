const MOCK_FAMILY_DATA = {
  familyId: 'FAM001',
  familyName: 'The Patels',
  guests: [
    { name: 'Amit Patel', events: ['mehndi', 'pithi', 'sangeet', 'wedding'] },
    { name: 'Priya Patel', events: ['sangeet', 'wedding'] },
  ],
  rsvps: [],
}

// Simulate network delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Look up a guest family by email or phone number.
 * Currently returns mock data for any input.
 * TODO: Replace with Google Apps Script endpoint.
 */
export async function lookupFamily(identifier) {
  await delay(600)
  if (!identifier) return null
  // Return mock data for any identifier during development
  return { ...MOCK_FAMILY_DATA }
}

/**
 * Save RSVP data.
 * TODO: Replace with Google Apps Script endpoint.
 */
export async function saveRSVP(familyId, rsvpData) {
  await delay(400)
  console.log('RSVP submitted:', { familyId, rsvpData })
  return { success: true }
}
