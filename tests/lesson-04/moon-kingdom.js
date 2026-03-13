// Bài 1:
function createCharaters() {
    // Khai báo mảng characters
    const characters = [
        { name: "warrior", level: 10, health: 400 },
        { name: "mage", level: 8, health: 300 },
        { name: "archer", level: 12, health: 250 },
        { name: "knight", level: 15, health: 450 },
        { name: "assassin", level: 10, health: 200 },
    ];

    // Sử dụng hàm map để tạo ra mảng mới: charatersPowerUp

    // const charatersPowerUp = characters.map(character =>{
    //     return{
    //         name: character.name.toUpperCase(),
    //         level: character.level * 2,
    //         health: character.health * 3,
    //     };
    // });

    const charatersPowerUp = characters.map((char) => ({
        ...char, // Sao chép lại các thuộc tính cũ
        name: char.name.toUpperCase(), // Thay đổi thuộc tính name
        level: char.level * 2, // Thay đổi thuộc tính level
        health: char.health * 3, // Thay đổi thuộc tính health
    }));

    // Lọc ra các phần tử có chỉ số health > 1000
    const possibleWinners = charatersPowerUp.filter(
        (character) => character.health > 1000,
    );

    // In ra kết quả
    console.log("Danh sách anh hùng được tăng sức mạnh:");
    console.log(charatersPowerUp);
    console.log("Danh sách anh hùng có thể thắng:");
    console.log(possibleWinners);
}

// createCharaters();

///////////////////////////////////////////////////////
// Bài 2:
function printLeaderboard(player) {
    // Sắp xếp theo score từ cao đến thấp
    const sortedPlayers = player.sort((a, b) => b.score - a.score);

    // In bảng xếp hạng
    sortedPlayers.forEach((player, index) => {
        let medal = "  ";

        if (index === 0) {
            medal = "🥇";
        } else if (index === 1) {
            medal = "🥇";
        } else if (index === 2) {
            medal = "🥉";
        }

        console.log(`${medal} ${index + 1}. ${player.name} - ${player.score}`);
    });
}

// Test
const players = [
    { name: "Mario", score: 950 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 800 },
    { name: "Yoshi", score: 500 },
    { name: "Mentor", score: 1000 },
    { name: "Princess", score: 800 },
    { name: "ThanhTu", score: 900 },
];

printLeaderboard(players);