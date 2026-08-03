---
title: Guide to Identifiers @ Open Library Docs
---
# Guide to Identifiers

Best practices were discussed at [http://webservices.itcs.umich.edu/mediawiki/oaibp/index.php/IdentifyingTheResource](http://webservices.itcs.umich.edu/mediawiki/oaibp/index.php/IdentifyingTheResource), although that site has been frozen since mid-2007 when the DLF was reabsorbed into CLIR to form [https://www.diglib.org](https://www.diglib.org/). Current best practices may vary.

The following tables list Author Identifiers and Edition Identifiers, including the identifier name, description, example, and link to additional documentation.

## Author Identifiers

|ID|Description|Example|Docs|
|---|---|---|---|
|OLID|Open Library author record|OL1234A|[Open Library API](https://openlibrary.org/developers/api)|
|LCAuth|Library of Congress authority ID|[https://id.loc.gov/authorities/no2013090983](https://id.loc.gov/authorities/no2013090983)|[Library of Congress Authorities](https://id.loc.gov/)|
|VIAF ID|Virtual International Authority File identifier|e.g. 12345678|[VIAF](https://viaf.org/)|
|ISNI|International Standard Name Identifier|e.g. 000000012146438X|[ISNI](http://www.isni.org/)|
|ORCID|Open Researcher and Contributor ID|0000-0001-2345-6789|[ORCID](https://orcid.org/)|
|WD ID|Wikidata item identifier|Q6290611|[Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page)|

## Edition Identifiers

|ID|Description|Example|Docs|
|---|---|---|---|
|OCLCid|OCLC control number|e.g. 12345678|[OCLC Help](https://help.oclc.org/Discovery_and_Reference/WorldCat-org/WorldCat-org_Item_Details_screen/About_the_Item_Details_screen)|
|LCCN|Library of Congress Control Number|e.g. 2002022641|[LCCN Namespace](https://www.loc.gov/marc/lccn-namespace.html)|
|OLID|Open Library ID|OL234M|[Open Library API](https://openlibrary.org/developers/api)|
|OCAID|Open Content Alliance ID (Archive.org item identifier)|e.g. 12345678|[Archive.org](https://archive.org/)|
|HTID|Hathi Trust ID|e.g. HT123456789|[Hathi Trust Data](https://www.hathitrust.org/data)|
|Google ID|Google Books ID|zyTCAlFPjgYC|[Google Books Partner Help](https://support.google.com/books/partner/answer/3474239)|

## Open Library identifiers on Archive.org

Archive.org and Open Library items were previously connected using a metadata field called `openlibrary` on Archive.org and a field called `ocaid` on Open Library (short for `Open Content Alliance ID`; see [https://en.wikipedia.org/wiki/Open_Content_Alliance](https://en.wikipedia.org/wiki/Open_Content_Alliance)).

These `openlibrary` IDs became stale and were rarely used. Two new fields were added to replace the `openlibrary` field on Archive.org: `openlibrary_edition` and `openlibrary_work`.

If I recall @hank and @judec informed me the `openlibrary` metadata key is actually being used in certain places within our derive pipelines — this code has never been updated to use `openlibrary_edition` and `openlibrary_work`.

### Retrieving Archive.org data for an Open Library identifier

For any given `openlibrary_edition`, you can use this ID to pull the MARC record from Open Library to verify metadata matches. Alternatively, if you have a book on Archive.org (for example, `jungleauthoritat00sinc`) with an `openlibrary_edition` of `OL3561303M`, you can retrieve the JSON API data at [https://openlibrary.org/books/OL3561303M.json](https://openlibrary.org/books/OL3561303M.json) to check the values without needing the MARC record.

## Open Library

```
{
  "covers": [253146],
  "ocaid": "jungleauthoritat00sinc",
  "key": "/books/OL3561303M",
  "identifiers": {
    "goodreads": ["54855"],
    "librarything": ["3414"]
  },
  "lccn": ["2002026536"],
  "isbn_10": ["039397779X"]
}
```

## Archive.org identifiers

```
<isbn>9780393977790</isbn>
<isbn>039397779X</isbn>
<openlibrary>OL3561303M</openlibrary>
<external-identifier>urn:asin:039397779X</external-identifier>
<external-identifier>urn:acs6:jungleauthoritat00sinc:pdf:0c7cfd74-4178-4606-aad6-82c7dd226004</external-identifier>
<external-identifier>urn:acs6:jungleauthoritat00sinc:epub:e2b0f076-2d77-44b4-bbbd-75e14c654c2c</external-identifier>
<external-identifier>urn:oclc:record:1035882283</external-identifier>
<boxid>IA1138320</boxid>
<identifier>jungleauthoritat00sinc</identifier>
<containerid>S0022</containerid>
<identifier-access>http://archive.org/details/jungleauthoritat00sinc</identifier-access>
<identifier-ark>ark:/13960/t9n33ns5x</identifier-ark>
<oclc-id>473022932</oclc-id>
<oclc-id>492015570</oclc-id>
<oclc-id>50143929</oclc-id>
<oclc-id>611841594</oclc-id>
<oclc-id>750905675</oclc-id>
<oclc-id>845516453</oclc-id>
<oclc-id>849008372</oclc-id>
<lccn>2002026536</lccn>
```

Last updated: 3/26/26, 3:52 PM

Pager

[Previous pageCreating Community Lists](https://docs.openlibrary.org/librarians/creating-community-lists.html)

[Next pageLibrary Metadata Standards](https://docs.openlibrary.org/librarians/library-metadata-standards.html)