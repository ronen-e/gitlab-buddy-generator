export const teamYml = `
- slug: dz
  type: person
  name: Dmitriy 'DZ' Zaporozhets
  start_date: 2013-01-24
  location_factor: 0.5122
  locality: Kharkiv
  country: Ukraine
  role: Co-founder, <a href="/job-families/engineering/backend-engineer/#engineering-fellow">Engineering Fellow</a>
  reports_to: sid
  twitter: dzaporozhets
  gitlab: dzaporozhets
  picture: picture_dmitriy.png
  departments:
    - Engineering Function
    - Core Team Alum
  projects:
    gitlab-ce: maintainer backend
    gitlab-ee: maintainer backend
  story:  |
          Dmitriy started GitLab in September 2011 and has released it every month on the 22nd since then.
          He wanted to make a great and free project management system that he could use every day.
          He loved to work on GitLab so much that in January of 2013 he began to work on GitLab fulltime.
          When he has time he loves to code a major new GitLab feature in two days.
          He loves a good chocolate and a merge request that can be accepted without comments.
          He is the lead author of GitLab CE and CI.

- slug: sid
  type: person
  name: Sid Sijbrandij
  start_date: 2012-08-24
  location_factor: 1
  locality: San Francisco, CA
  country: USA
  role: Co-founder, <a href="/job-families/chief-executive-officer/">Chief Executive Officer (CEO)</a>, Board of Directors
  reports_to: bruce-a
  twitter: sytses
  gitlab: sytses
  pronouns: he/him
  departments:
    - Executive
    - Board
    - Core Team Alumni
  expertise:  |
              <li>Compensation Committee <a href="/company/team/structure/#expert">expert</a></li>
  picture: picture_sytse.png
  story:  |
          Sid saw the first ruby code in 2007 and loved it so much he learned to program and made this his profession.
          Before that he was engaged in various businesses, from selling programmable infrared receivers to starting a recreational submarine company.
          He is always looking to publicly document an answer or to make a process more efficient.
          He was never good at sports but tries to make it up in quantity by hiking, sailing, skiing, snowboarding, speed skating, dancing Zouk, squashing, and running.
          He loves participating in conversations on Hacker News, and reading Marc Andreessen's tweets (now that Marc stopped this greatly increased his productivity).
          Here's a link to Sid's <a href="/handbook/ceo/">README</a>.

- slug: marin
  type: person
  name: Marin Jankovski
  start_date: 2012-09-04
  location_factor: 0.5122
  locality: Amsterdam
  country: The Netherlands
  role: <a href="/job-families/engineering/backend-engineer/#engineering-manager/">Engineering Manager, Delivery</a>
  reports_to: glopezfernandez
  picture: picture_marin.jpg
  twitter: maxlazio
  gitlab: marin
  departments:
    - Engineering Function
    - Core Team Alumni
  projects:
    omnibus-gitlab: maintainer
    cookbook-omnibus-gitlab: maintainer
    charts-gitlab-io: maintainer
    gitlab-chart: maintainer
    distribution: maintainer
  expertise:  |
              <li><a href="https://docs.gitlab.com/ee/workflow/lfs/manage_large_binaries_with_git_lfs.html">LFS</a> <a href="/company/team/structure/#expert">expert</a></li>
  story:  |
          Marin loves to develop in Rails but has also grown an interest in operations, release and development workflows.
          When video conferencing with him you get a cat running across the room as a bonus.
          He is notorious for starting early in the morning just after breakfast and not having lunch until his workday is over.
          You would expect him to be hungry and grumpy the last few hours but as long as his internet connection is up he is always friendly and upbeat.
          He loves travelling and talking about politics. Here's a link to Marin's <a href="/handbook/engineering/infrastructure/team/delivery/engineering-manager/">README</a>.

- slug: jacob-v
  type: person
  name: Jacob Vosmaer
  start_date: 2013-07-01
  location_factor: 0.5122
  locality: Amsterdam
  country: The Netherlands
  role: <a href="/job-families/engineering/backend-engineer/#gitaly">Staff Backend Engineer, Gitaly</a>
  reports_to: eng-manager-gitaly
  picture: picture_jacob.png
  twitter: jacobvosmaer
  gitlab: jacobvosmaer-gitlab
  departments:
    - Engineering Function
    - Development Department
    - Dev Section
    - Gitaly Team
    - Core Team Alumni
  projects:
    gitaly: maintainer
    gitlab-development-kit: maintainer
    gitlab-workhorse: maintainer
  expertise:  |
              <li><a href="https://docs.gitlab.com/omnibus/settings/redis.html">Redis</a>, <a href="https://docs.gitlab.com/omnibus/settings/unicorn.html">Unicorn</a>, and <a href"https://docs.gitlab.com/ee/integration/kerberos.html">Kerberos</a> <a href="/company/team/structure/#expert">expert</a></li>
  story:  |
          Jacob became a professional software developer in 2012 after a brief academic career as a logician.
          He joined GitLab in 2013 as a Senior Service Engineer, helping customers install and maintain GitLab and working on GitLab.com infrastructure.
          As a Staff Backend Engineer he now works mostly on <a href="https://gitlab.com/gitlab-org/gitaly/">Gitaly</a>.
`;

export const teamJson = [{
  "slug": "dz",
  "type": "person",
  "name": "Dmitriy 'DZ' Zaporozhets",
  "location_factor": 0.5122,
  "locality": "Kharkiv",
  "country": "Ukraine",
  "role": "Co-founder, <a href=\"/job-families/engineering/backend-engineer/#engineering-fellow\">Engineering Fellow</a>",
  "reports_to": "sid",
  "twitter": "dzaporozhets",
  "gitlab": "dzaporozhets",
  "picture": "picture_dmitriy.png",
  "departments": ["Engineering Function", "Core Team Alum"],
  "projects": {
    "gitlab-ce": "maintainer backend",
    "gitlab-ee": "maintainer backend"
  },
  "story": "Dmitriy started GitLab in September 2011 and has released it every month on the 22nd since then.\nHe wanted to make a great and free project management system that he could use every day.\nHe loved to work on GitLab so much that in January of 2013 he began to work on GitLab fulltime.\nWhen he has time he loves to code a major new GitLab feature in two days.\nHe loves a good chocolate and a merge request that can be accepted without comments.\nHe is the lead author of GitLab CE and CI.\n"
}, {
  "slug": "sid",
  "type": "person",
  "name": "Sid Sijbrandij",
  "location_factor": 1,
  "locality": "San Francisco, CA",
  "country": "USA",
  "role": "Co-founder, <a href=\"/job-families/chief-executive-officer/\">Chief Executive Officer (CEO)</a>, Board of Directors",
  "reports_to": "bruce-a",
  "twitter": "sytses",
  "gitlab": "sytses",
  "pronouns": "he/him",
  "departments": ["Executive", "Board", "Core Team Alumni"],
  "expertise": "<li>Compensation Committee <a href=\"/company/team/structure/#expert\">expert</a></li>\n",
  "picture": "picture_sytse.png",
  "story": "Sid saw the first ruby code in 2007 and loved it so much he learned to program and made this his profession.\nBefore that he was engaged in various businesses, from selling programmable infrared receivers to starting a recreational submarine company.\nHe is always looking to publicly document an answer or to make a process more efficient.\nHe was never good at sports but tries to make it up in quantity by hiking, sailing, skiing, snowboarding, speed skating, dancing Zouk, squashing, and running.\nHe loves participating in conversations on Hacker News, and reading Marc Andreessen's tweets (now that Marc stopped this greatly increased his productivity).\nHere's a link to Sid's <a href=\"/handbook/ceo/\">README</a>.\n"
}, {
  "slug": "marin",
  "type": "person",
  "name": "Marin Jankovski",
  "location_factor": 0.5122,
  "locality": "Amsterdam",
  "country": "The Netherlands",
  "role": "<a href=\"/job-families/engineering/backend-engineer/#engineering-manager/\">Engineering Manager, Delivery</a>",
  "reports_to": "glopezfernandez",
  "picture": "picture_marin.jpg",
  "twitter": "maxlazio",
  "gitlab": "marin",
  "departments": ["Engineering Function", "Core Team Alumni"],
  "projects": {
    "omnibus-gitlab": "maintainer",
    "cookbook-omnibus-gitlab": "maintainer",
    "charts-gitlab-io": "maintainer",
    "gitlab-chart": "maintainer",
    "distribution": "maintainer"
  },
  "expertise": "<li><a href=\"https://docs.gitlab.com/ee/workflow/lfs/manage_large_binaries_with_git_lfs.html\">LFS</a> <a href=\"/company/team/structure/#expert\">expert</a></li>\n",
  "story": "Marin loves to develop in Rails but has also grown an interest in operations, release and development workflows.\nWhen video conferencing with him you get a cat running across the room as a bonus.\nHe is notorious for starting early in the morning just after breakfast and not having lunch until his workday is over.\nYou would expect him to be hungry and grumpy the last few hours but as long as his internet connection is up he is always friendly and upbeat.\nHe loves travelling and talking about politics. Here's a link to Marin's <a href=\"/handbook/engineering/infrastructure/team/delivery/engineering-manager/\">README</a>.\n"
}, {
  "slug": "jacob-v",
  "type": "person",
  "name": "Jacob Vosmaer",
  "location_factor": 0.5122,
  "locality": "Amsterdam",
  "country": "The Netherlands",
  "role": "<a href=\"/job-families/engineering/backend-engineer/#gitaly\">Staff Backend Engineer, Gitaly</a>",
  "reports_to": "eng-manager-gitaly",
  "picture": "picture_jacob.png",
  "twitter": "jacobvosmaer",
  "gitlab": "jacobvosmaer-gitlab",
  "departments": ["Engineering Function", "Development Department", "Dev Section", "Gitaly Team", "Core Team Alumni"],
  "projects": {
    "gitaly": "maintainer",
    "gitlab-development-kit": "maintainer",
    "gitlab-workhorse": "maintainer"
  },
  "expertise": "<li><a href=\"https://docs.gitlab.com/omnibus/settings/redis.html\">Redis</a>, <a href=\"https://docs.gitlab.com/omnibus/settings/unicorn.html\">Unicorn</a>, and <a href\"https://docs.gitlab.com/ee/integration/kerberos.html\">Kerberos</a> <a href=\"/company/team/structure/#expert\">expert</a></li>\n",
  "story": "Jacob became a professional software developer in 2012 after a brief academic career as a logician.\nHe joined GitLab in 2013 as a Senior Service Engineer, helping customers install and maintain GitLab and working on GitLab.com infrastructure.\nAs a Staff Backend Engineer he now works mostly on <a href=\"https://gitlab.com/gitlab-org/gitaly/\">Gitaly</a>.\n"
}];