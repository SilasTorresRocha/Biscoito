from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def gerar_resposta(pergunta):
    response = client.models.generate_content(
        model="gemini-3-flash-preview",  
        contents=pergunta
    )
    return response.text

#print(gerar_resposta("Poderia fazer um poema tipo do cume, pore co outro duplo sentido"))
