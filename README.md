# Menu Information Enrichment with GPT API

This project aims to enhance the information of menu items stored in a database by fetching their names and querying the GPT API for nutritional information, allergens, and tags. The information retrieved from the GPT API is then added back to the menu items.

## Project Structure

- `main.py`: Fetches all menu item names from the database and queries the GPT API for additional information (nutritional information, allergens, tags), then updates the menu items with this new information.
- `database.py`: Contains the MongoDB URI and the database name.
- `models.py`: Defines the data types for the menu information.

## Setup Instructions

1. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

2. Activate the virtual environment:
    - On Unix or MacOS:
        ```bash
        source venv/bin/activate
        ```
    - On Windows:
        ```powershell
        .\venv\Scripts\Activate.ps1
        ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the application:
    ```bash
    uvicorn main:app --reload
    ```

This will start the FastAPI application and enable live reloading during development.

