export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
};

export type Achievement = {
  title: string;
  description: string;
  image: string;
};

export const navItems = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Dự án", href: "#projects" },
  { label: "Thành tựu", href: "#achievements" },
  { label: "Liên hệ", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Back-end",
    items: ["Java", "Node.js", "Spring Boot"],
  },
  {
    title: "Blockchain",
    items: ["Solidity", "Smart Contract", "Hardhat"],
  },
  {
    title: "Công cụ",
    items: ["Git", "GitHub", "VS Code", "Linux"],
  },
];

export const projects: Project[] = [
  {
    name: "SuiChin Hackathon",
    description:
      "Dự án hackathon tập trung vào ý tưởng rõ ràng, flow gọn và cảm giác demo đủ thuyết phục để mang đi pitching.",
    tags: ["Hackathon", "Web3", "Product"],
    image: "https://opengraph.githubassets.com/1/TrVHau/SuiChin-hackathon",
    href: "https://github.com/TrVHau/SuiChin-hackathon",
  },
  {
    name: "Mini Lending Protocol",
    description:
      "Mini protocol cho bài toán lending trong DeFi - logic thế chấp, luồng vay-trả và tư duy thiết kế smart contract có thể mở rộng.",
    tags: ["DeFi", "Smart Contract", "Blockchain"],
    image: "https://opengraph.githubassets.com/1/TrVHau/Mini-lending-protocol",
    href: "https://github.com/TrVHau/Mini-lending-protocol",
  },
  {
    name: "CoffeeChain",
    description:
      "Kết hợp trải nghiệm mua hàng, nhận diện thương hiệu và luồng thao tác mượt - web app thực chiến có màu sắc product rõ ràng.",
    tags: ["Commerce", "UI", "Brand"],
    image: "https://opengraph.githubassets.com/1/TrVHau/CoffeeChain",
    href: "https://github.com/TrVHau/CoffeeChain",
  },
  {
    name: "ChessWeb",
    description:
      "Ứng dụng cờ vua trên web - logic game state, luật cờ đầy đủ và tương tác thời gian thực. Càng vào sâu càng lộ tay nghề.",
    tags: ["Game", "React", "Interaction"],
    image: "https://opengraph.githubassets.com/1/Sagitoaz/ChessWeb",
    href: "https://github.com/Sagitoaz/ChessWeb",
  },
];

export const achievements: Achievement[] = [
  {
    title: "ICPC 2024",
    description:
      "Dấu mốc rèn tư duy thuật toán và khả năng xử lý vấn đề dưới áp lực.",
    image: `${import.meta.env.BASE_URL}icpc2024.jpg`,
  },
  {
    title: "ICPC 2025",
    description:
      "Cột mốc tiếp theo trong competitive programming - vẫn đang đi đều tay.",
    image: `${import.meta.env.BASE_URL}icpc2025.jpg`,
  },
  {
    title: "SuiChin Hackathon",
    description:
      "Hackathon Web3 - ý tưởng rõ ràng, flow gọn, pitch được trên sân khấu thật.",
    image: `${import.meta.env.BASE_URL}sui-hackathon.jpg`,
  },
];

export const highlights = [
  "Web developer định hướng full-stack",
  "Quan tâm blockchain và product thinking",
  "Sinh viên PTIT - B23DCCN287",
];
