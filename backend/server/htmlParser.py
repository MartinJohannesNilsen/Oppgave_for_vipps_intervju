"Own implementation of HTMLParser as I want to store all the HTML data visible on screen when using HTMLParser.feed()"

from html.parser import HTMLParser

class HTMLParseToText(HTMLParser):
    def __init__(self):
        super(HTMLParseToText, self).__init__()
        self.text = ""

    def handle_data(self, data):
        self.text += data
