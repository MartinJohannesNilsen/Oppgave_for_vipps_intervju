from django.http import HttpResponse
import requests
from server.htmlParser import HTMLParseToText


def index(request):
    return HttpResponse("Velkommen til mitt backendAPI for Vipps' oppgave")


def topics(request):
    # Have to get the response from Wikipedia API based on keyword in Query string
    topic = request.GET.get('keyword')
    getFromWikipediaAPI = requests.get(
        f'https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page={topic}')
    response_dict = getFromWikipediaAPI.json()
    assert type(response_dict) == dict, "The object is not a dictionary"

    # Extracts htmltext in response and parse the topic replacing "_" as this is " " in query string
    textfield = str(response_dict.get('parse').get('text'))
    topicParse = topic.strip().replace('_', ' ')

    # Feeds the htmltext through my own parser, for finding the data (keyword does appear in htmltags, in which we don't want to count)
    htmlparser = HTMLParseToText()
    htmlparser.feed(textfield)

    # Counts occurrences of keyword (case insensitive) visible on screen in the article
    count = htmlparser.text.lower().count(topicParse.lower()) 

    # return HttpResponse(textfield) # Displays text from Wikipedia API
    return HttpResponse(f'Number of occurrences of the keyword "{topicParse}" on Wikipedia page: {count}')
