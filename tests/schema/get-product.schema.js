export const getProductValidRes = 
{
    success: {
        "id": 1234,
        "name": "Product X",
        "description": "A high-performance product for professional use.",
        "price": 99.99,
        "categories": [
            {
                "id": 1,
                "name": "Electronics"
            },
            {
                "id": 2,
                "name": "Tools"
            }
        ],
        "inventory": {
            "available": true,
            "quantity": 50,
            "location": {
                "address": "123 Main Street",
                "city": "New York",
                "country": "USA"
            }
        },
        "reviews": [
            {
                "id": 1,
                "user": "JohnDoe",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "id": 2,
                "user": "JaneSmith",
                "rating": 5,
                "comment": "Excellent quality and value for money."
            }
        ]
    }
}