from random import shuffle
from ssl import SSLContext, create_default_context
import requests
from json import loads
import gratient
import json
from httpx import Client, post

class SSLFactory:
    def __init__(self):
        self.ciphers = "ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+HIGH:DH+HIGH:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+HIGH:RSA+3DES".split(":")
    def __call__(self) -> SSLContext:
        shuffle(self.ciphers)
        context = create_default_context()
        context.set_ciphers(f"{':'.join(self.ciphers)}:!aNULL:!eNULL:!MD5")
        return context

def redeem_gift_voucher(url, phone_number):
    sess = Client(verify=SSLFactory()(), headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.67"})
    
    truewallet_gift_voucher_code = (url.split("https://gift.truemoney.com/campaign/?v=", 1)[1])
    if truewallet_gift_voucher_code:
        d = sess.post(f"https://gift.truemoney.com/campaign/vouchers/{truewallet_gift_voucher_code}/redeem", json={"mobile": phone_number, "voucher_hash": truewallet_gift_voucher_code})
        if d.status_code == 200:
            print(gratient.green("Redeem"))
        else:
            print(gratient.red("Don't Redeem"))
    else:
        print(gratient.red("Not Found"))

def main():
    phone_number = "0645727644"
    url = input("Url: ")
    redeem_gift_voucher(url, phone_number)

if __name__ == "__main__":
    main()
