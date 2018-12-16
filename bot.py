import lyricsgenius as genius

api = genius.Genius("4nnj9KlnGsMUuNsaYKooDZaJtT-1Wx3Den2POPqlZTj9s3GP_HGxI40Ucj-Y7Iwx")

artist = api.search_artist("angel olsen", max_songs = 100)

artist.save_lyrics()