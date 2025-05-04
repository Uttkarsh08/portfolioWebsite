export async function GET() {
  const username = "kshitijyadav2003";

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        contestRating {
          rating
          topPercentage
          attendedContestsCount
        }
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { username } }),
  });

  const data = await res.json();
  return Response.json(data?.data?.matchedUser || {});
}
