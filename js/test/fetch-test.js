async function testFetch() {
  try {
    const result = await fetch('api/notifications');
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
}

export { testFetch };
